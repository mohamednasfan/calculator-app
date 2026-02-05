import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  display: string = '';

  // Add value to display
  press(value: string) {
    this.display += value;
  }

  // Clear display
  clear() {
    this.display = '';
  }

  // Calculate result
  calculate() {
    try {
      this.display = eval(this.display) + '';
    } catch {
      alert('Invalid calculation');
      this.display = '';
    }
  }

  // Listen for keyboard events
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
      this.press(key);
    } else if (key === 'Enter') {
      this.calculate();
    } else if (key === 'Backspace') {
      this.display = this.display.slice(0, -1);
    } else if (key.toLowerCase() === 'c') {
      this.clear();
    }
  }
}
