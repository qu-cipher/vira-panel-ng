import { Component, model, signal } from '@angular/core';
import { DashHeader } from '../../../components/dash-header/dash-header';
import { Button } from '../../../components/button/button';
import { Switch } from '../../../components/switch/switch';
import { TitleInput } from '../../../components/title-input/title-input';
import { TitleSwitch } from '../../../components/title-switch/title-switch';

interface Receiver {
  name: string;
  phone: string;
}

interface NotificationSetting {
  id: number,
  title: string;
  desc: string;
  sms: boolean;
  email: boolean;
}

import { Page } from '../../../components/page/page';
import { Tabs } from '../../../components/tabs/tabs';
import { Tab } from '../../../components/tab/tab';
import { FormGrid } from '../../../components/form-grid/form-grid';
import { Avatar } from '../../../components/avatar/avatar';

@Component({
  imports: [DashHeader, Switch, Button, TitleInput, TitleSwitch, Page, Tabs, Tab, FormGrid, Avatar],
  selector: 'vira-settings',
  styleUrl: './settings.css',
  templateUrl: './settings.html',
})
export class Settings {
  view = signal<'notif' | 'security'>('notif');
  notifications: NotificationSetting[] = [
    {
      id: 1,
      title: 'یادآوری تمدید اشتراک',
      desc: 'زمان‌بندی توسط ویرالینک: ۱۴، ۷ و ۳ روز قبل از انقضا',
      sms: true,
      email: false,
    },
    {
      id: 2,
      title: 'هشدار مصرف',
      desc: 'وقتی مصرف دستگاه یا پیام به ۸۰٪ و ۱۰۰٪ سقف برسد',
      sms: false,
      email: false,
    },
    {
      id: 3,
      title: 'تأیید پرداخت و صدور فاکتور',
      desc: 'پس از هر پرداخت موفق یا تأیید رسید',
      sms: false,
      email: false,
    },
    {
      id: 4,
      title: 'اطلاع‌رسانی سرویس و به‌روزرسانی‌ها',
      desc: 'زمان‌بندی نگهداری و امکانات جدید',
      sms: false,
      email: false,
    },
  ];

  otherRecievers = model<Receiver[]>([]);

  newName = signal('');
  newPhone = signal('');

  addReceiver() {
    let name = this.newName().trim();
    let phone = this.newPhone();

    this.otherRecievers.update((list) => [...list, { name, phone }]);
    this.newName.set('');
    this.newPhone.set('');
  }

  removeReceiver(receiver: Receiver) {
    this.otherRecievers.update((list) => list.filter((r) => r !== receiver));
  }

  switchToNotif() {
    this.view.set('notif');
  }
  switchToSecurity() {
    this.view.set('security');
  }
}
