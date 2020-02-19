import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatRippleModule, MatSelectModule, MatOptionModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [MatTabsModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatOptionModule, MatIconModule],
    exports: [MatTabsModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatOptionModule, MatIconModule]
})
export class MaterialModule { }

