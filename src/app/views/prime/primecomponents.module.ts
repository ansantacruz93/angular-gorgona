import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
// Modulos de componentes de primeng
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import {EditorModule} from 'primeng/editor';
import { MegaMenuModule } from 'primeng/megamenu';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    DataViewModule,
    InputTextModule,
    TabViewModule,
    CardModule,
    DividerModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule,
    RadioButtonModule,
    ScrollPanelModule,
    KeyFilterModule,
    DialogModule,
    TableModule,
    SidebarModule,
    CheckboxModule,
    EditorModule,
    MegaMenuModule


  ],
  exports: [
    FormsModule,
    DataViewModule,
    InputTextModule,
    TabViewModule,
    CardModule,
    DividerModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule,
    RadioButtonModule,
    ScrollPanelModule,
    KeyFilterModule,
    DialogModule,
    TableModule,
    SidebarModule,
    CheckboxModule,
    EditorModule,
    MegaMenuModule

  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PrimecomponentsModule { }
