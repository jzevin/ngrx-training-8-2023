import { deckActions } from 'src/app/state/deck.actions';
import { deckSelectors } from 'src/app/state/deck.selectors';
import { DeckState, QuestionContent } from 'src/types/presentation-deck';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'nbme-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  showQuiz = false;
  revealAnswer = false;
  $deckState = this.store.select(deckSelectors.deck);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(deckActions.slides.load());
  }

  handleClick(event: MouseEvent, deckState: DeckState) {
    if (event.clientX < window.innerWidth * 0.1) {
      this.store.dispatch(deckActions.slides.decrement());
      this.decrementSlide(deckState);
    }

    if (event.clientX > window.innerWidth * 0.9) {
      this.store.dispatch(deckActions.slides.increment());
      this.incrementSlide(deckState);
    }
  }

  incrementSlide(deckState: DeckState) {
    this.onHideQuiz();
    this.revealAnswer = false;
    if (deckState.currentSlide)
      this.router.navigateByUrl(`/slide/${deckState.currentSlide?.id}`);
  }
  decrementSlide(deckState: DeckState) {
    this.onHideQuiz();
    this.revealAnswer = false;
    if (deckState.currentSlide)
      this.router.navigateByUrl(`/slide/${deckState.currentSlide?.id}`);
  }

  getSlideNumberText(deckState: DeckState) {
    const currentIndex = deckState.slides.findIndex(
      (slide) => slide.id === deckState.currentSlide?.id
    );
    return `${currentIndex + 1} / ${deckState.slides.length}`;
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
  getQuizData(deckState: DeckState): QuestionContent | null {
    const found = deckState.currentSlide?.contents.filter(
      (item) => item.type === 'question'
    );
    return found && found.length > 0 ? (found[0] as QuestionContent) : null;
  }

  isQuizAnswer(options: string[], option: string, answerIndex: number) {
    return answerIndex === options.findIndex((o) => option === o);
  }
}
