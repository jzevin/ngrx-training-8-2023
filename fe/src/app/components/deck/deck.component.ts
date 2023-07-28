import { ApiService } from 'src/app/services/api.service';
import { QuestionContent, Slide } from 'src/types/presentation-deck';

import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import slides from '../../../config/slides.json';

declare const hljs: any;

@Component({
  selector: 'nbme-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  @HostListener('window:keydown', ['$event']) handleKeyDown(
    event: KeyboardEvent
  ) {
    switch (event.key) {
      case 'ArrowRight':
        this.incrementSlide();
        break;
      case 'ArrowLeft':
        this.decrementSlide();
        break;
      default:
        break;
    }
  }
  id: string = '';
  currentSlide: Slide | null = null;
  slides: Slide[] = [];
  showQuiz = false;
  revealAnswer = false;
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    api.getSlides().subscribe((data) => {
      this.slides = data;
      this.id = this.route.snapshot.paramMap.get('id') || '';
      this.currentSlide =
        this.slides.find((slide) => slide.id === this.id) || null;
      if (!this.currentSlide) {
        this.router.navigateByUrl('404');
      }
    });
  }

  ngOnInit() {}

  incrementSlide() {
    const currentIndex = this.slides.findIndex(
      (slide) => slide.id === this.currentSlide?.id
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < this.slides.length) {
      this.currentSlide = this.slides[nextIndex];
      this.id = this.currentSlide.id;
      this.onHideQuiz();
      this.revealAnswer = false;
      this.router.navigateByUrl(`/slide/${nextIndex + 1}`);
    }
  }
  decrementSlide() {
    const currentIndex = this.slides.findIndex(
      (slide) => slide.id === this.currentSlide?.id
    );
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      this.currentSlide = this.slides[prevIndex];
      this.id = this.currentSlide.id;
      this.onHideQuiz();
      this.revealAnswer = false;
      this.router.navigateByUrl(`/slide/${prevIndex + 1}`);
    }
  }

  getSlideNumberText() {
    const currentIndex = this.slides.findIndex(
      (slide) => slide.id === this.currentSlide?.id
    );
    return `${currentIndex + 1} / ${this.slides.length}`;
  }

  onShowQuiz() {
    this.showQuiz = true;
  }
  onHideQuiz() {
    this.showQuiz = false;
  }
  onRevealAnswer() {
    this.revealAnswer = true;
  }
  getQuizData(): QuestionContent | null {
    const found = this.currentSlide?.contents.filter(
      (item) => item.type === 'question'
    );
    return found && found.length > 0 ? (found[0] as QuestionContent) : null;
  }
}
