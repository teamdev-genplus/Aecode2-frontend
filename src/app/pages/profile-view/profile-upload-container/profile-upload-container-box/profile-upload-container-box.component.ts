import { Component } from '@angular/core';
import { SvgHeartComponent } from '../../../../components/icons/svg-heart/svg-heart.component';
import { SvgCommentComponent } from '../../../../components/icons/svg-comment/svg-comment.component';
import { SvgViewComponent } from '../../../../components/icons/svg-view/svg-view.component';
import { SvgBookmarkComponent } from '../../../../components/icons';
import { ReactionItemComponent } from '../../../../components/reaction-item/reaction-item.component';

@Component({
  selector: 'app-profile-upload-container-box',
  standalone: true,
  imports: [
    ReactionItemComponent,
    SvgHeartComponent,
    SvgCommentComponent,
    SvgViewComponent,
    SvgBookmarkComponent,
  ],
  templateUrl: './profile-upload-container-box.component.html',
  styleUrl: './profile-upload-container-box.component.css',
})
export class ProfileUploadContainerBoxComponent {}
