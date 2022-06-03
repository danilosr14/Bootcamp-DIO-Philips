import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../Shered/component/star/star.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent

    ], imports: [
        CommonModule,
        FormsModule,
        StarModule,
        RouterModule.forChild([
        {
            path: 'courses/info/:id', component: CourseInfoComponent
        },
        {
            path: 'courses', component: CourseListComponent
        }
    ])
    ]
})
export class CourseModule {

}