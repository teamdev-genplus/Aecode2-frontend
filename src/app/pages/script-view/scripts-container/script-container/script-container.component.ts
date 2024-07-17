import { Component, Input, OnInit } from '@angular/core';
import { SvgCommentComponent } from '../../../../components/icons/svg-comment/svg-comment.component';
import { SvgHeartComponent } from '../../../../components/icons/svg-heart/svg-heart.component';
import { SvgViewComponent } from '../../../../components/icons/svg-view/svg-view.component';
import { ReactionItemComponent } from '../../../../components/reaction-item/reaction-item.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IScript } from '../../../../models/script';

@Component({
  selector: 'app-script-container',
  standalone: true,
  imports: [
    SvgCommentComponent,
    ReactionItemComponent,
    SvgHeartComponent,
    SvgViewComponent,
    RouterModule,
  ],
  templateUrl: './script-container.component.html',
  styleUrl: './script-container.component.css',
})
export class ScriptContainerComponent {
  @Input() script!: IScript;
  scriptId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // this.scriptId = +params.get('scriptId');
      // this.loadScript(this.scriptId);
    });
  }

  // loadScript(id: number) {
  //   this.scriptService.getScriptById(id).subscribe((data) => {
  //     this.script = data;
  //   });
  // }
}
