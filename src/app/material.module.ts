import { NgModule } from  '@angular/core';
import { MatButtonModule, MatIconModule  } from '@angular/material';


//decorator to turn class into decorator
@NgModule({
    imports: [MatButtonModule, MatIconModule],
    exports: [MatButtonModule, MatIconModule]
})
export class MaterialModule {}