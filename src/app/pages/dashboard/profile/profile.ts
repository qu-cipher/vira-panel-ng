import { Component, computed, linkedSignal, signal } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { TitleInput } from '../../../components/title-input/title-input';
import { Button } from '../../../components/button/button';
import { Dropdown, DropdownOption } from '../../../components/dropdown/dropdown';
import { FileDrop } from '../../../components/file-drop/file-drop';

type views = 'personal' | 'legal'

const PROVINCES: Record<string, readonly string[]> = {
  'آذربایجان شرقی': ['تبریز', 'مراغه', 'مرند', 'میانه', 'اهر', 'بناب'],
  'آذربایجان غربی': ['ارومیه', 'خوی', 'مهاباد', 'میاندوآب', 'بوکان', 'سلماس'],
  'اردبیل': ['اردبیل', 'پارس‌آباد', 'مشگین‌شهر', 'خلخال', 'گرمی'],
  'اصفهان': ['اصفهان', 'کاشان', 'خمینی‌شهر', 'نجف‌آباد', 'شاهین‌شهر', 'شهرضا'],
  'البرز': ['کرج', 'فردیس', 'نظرآباد', 'هشتگرد', 'اشتهارد'],
  'ایلام': ['ایلام', 'دهلران', 'ایوان', 'آبدانان', 'دره‌شهر'],
  'بوشهر': ['بوشهر', 'برازجان', 'گناوه', 'کنگان', 'دیلم'],
  'تهران': ['تهران', 'اسلامشهر', 'شهریار', 'ورامین', 'قدس', 'پاکدشت', 'دماوند'],
  'چهارمحال و بختیاری': ['شهرکرد', 'بروجن', 'فارسان', 'لردگان'],
  'خراسان جنوبی': ['بیرجند', 'قائن', 'طبس', 'فردوس', 'نهبندان'],
  'خراسان رضوی': ['مشهد', 'نیشابور', 'سبزوار', 'تربت حیدریه', 'قوچان', 'کاشمر'],
  'خراسان شمالی': ['بجنورد', 'شیروان', 'اسفراین', 'جاجرم'],
  'خوزستان': ['اهواز', 'آبادان', 'دزفول', 'خرمشهر', 'اندیمشک', 'بهبهان', 'ماهشهر'],
  'زنجان': ['زنجان', 'ابهر', 'خرمدره', 'قیدار'],
  'سمنان': ['سمنان', 'شاهرود', 'دامغان', 'گرمسار'],
  'سیستان و بلوچستان': ['زاهدان', 'زابل', 'چابهار', 'ایرانشهر', 'خاش', 'سراوان'],
  'فارس': ['شیراز', 'مرودشت', 'کازرون', 'جهرم', 'فسا', 'لار', 'آباده'],
  'قزوین': ['قزوین', 'تاکستان', 'الوند', 'بوئین‌زهرا', 'آبیک'],
  'قم': ['قم', 'قنوات', 'جعفریه', 'کهک', 'دستجرد', 'سلفچگان'],
  'کردستان': ['سنندج', 'سقز', 'مریوان', 'بانه', 'قروه', 'بیجار'],
  'کرمان': ['کرمان', 'رفسنجان', 'سیرجان', 'بم', 'جیرفت', 'زرند'],
  'کرمانشاه': ['کرمانشاه', 'اسلام‌آباد غرب', 'کنگاور', 'هرسین', 'سنقر', 'پاوه'],
  'کهگیلویه و بویراحمد': ['یاسوج', 'دهدشت', 'دوگنبدان', 'سی‌سخت', 'لیکک'],
  'گلستان': ['گرگان', 'گنبد کاووس', 'علی‌آباد کتول', 'آق‌قلا', 'بندر ترکمن', 'کردکوی'],
  'گیلان': ['رشت', 'بندر انزلی', 'لاهیجان', 'لنگرود', 'تالش', 'آستارا', 'رودسر'],
  'لرستان': ['خرم‌آباد', 'بروجرد', 'دورود', 'الیگودرز', 'کوهدشت', 'ازنا'],
  'مازندران': ['ساری', 'بابل', 'آمل', 'قائم‌شهر', 'بهشهر', 'چالوس', 'تنکابن', 'نوشهر'],
  'مرکزی': ['اراک', 'ساوه', 'خمین', 'محلات', 'دلیجان', 'شازند'],
  'هرمزگان': ['بندرعباس', 'قشم', 'کیش', 'میناب', 'بندر لنگه', 'حاجی‌آباد'],
  'همدان': ['همدان', 'ملایر', 'نهاوند', 'اسدآباد', 'تویسرکان', 'کبودرآهنگ'],
  'یزد': ['یزد', 'میبد', 'اردکان', 'بافق', 'مهریز', 'ابرکوه'],
};

const toOption = (name: string): DropdownOption => ({ value: name, label: name });

@Component({
  imports: [DashHeader, TitleInput, Button, Dropdown, FileDrop],
  selector: 'vira-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  view = signal<views>('personal');

  stateOptions = Object.keys(PROVINCES).map(toOption);
  selectedState = signal<string | null>(null);
  cityOptions = computed(() => (PROVINCES[this.selectedState() ?? ''] ?? []).map(toOption));
  // resets to null whenever the selected state changes
  selectedCity = linkedSignal<string | null, string | null>({
    source: this.selectedState,
    computation: () => null,
  });

  fileInput = signal<File[]>([]);

  accountType = [
    { value: 'personal', label: 'شخص حقیقی' },
    { value: 'legal', label: 'شخص حقوقی' }
  ];

  switchToPersonal() {
    this.view.set('personal');
  }
  switchToLegal() {
    this.view.set('legal');
  }
}
