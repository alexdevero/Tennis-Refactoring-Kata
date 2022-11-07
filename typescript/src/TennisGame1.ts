import { TennisGame } from './TennisGame'

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0
  private player2Score: number = 0
  private player1Name: string
  private player2Name: string

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  private isEqualScore(): boolean {
    return this.player1Score === this.player2Score
  }

  private isAdvantageScore(): boolean {
    return this.player1Score >= 4 || this.player2Score >= 4
  }

  private getEqualScore(): string {
    const scores = ['Love-All', 'Fifteen-All', 'Thirty-All']

    return scores[this.player1Score] || 'Deuce'
  }

  private getAdvantageScore(): string {
    const minusResult: number = this.player1Score - this.player2Score

    if (minusResult === 1) {
      return 'Advantage player1'
    } else if (minusResult === -1) {
      return 'Advantage player2'
    } else if (minusResult >= 2) {
      return 'Win for player1'
    } else {
      return 'Win for player2'
    }
  }

  private getScoreName(score: number): string {
    const scores = ['Love', 'Fifteen', 'Thirty', 'Forty']

    return scores[score] || ''
  }

  getScore(): string {
    let score: string = ''

    if (this.isEqualScore()) {
      score = this.getEqualScore()
    } else if (this.isAdvantageScore()) {
      score = this.getAdvantageScore()
    } else {
      score = `${this.getScoreName(this.player1Score)}-${this.getScoreName(this.player2Score)}`
    }

    return score
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) {
      this.player1Score += 1
    } else {
      this.player2Score += 1
    }
  }
}
