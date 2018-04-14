import { NgModule } from  '@angular/core';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule   } from '@angular/material';


//decorator to turn class into decorator
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}