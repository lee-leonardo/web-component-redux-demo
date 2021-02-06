import {
  LitElement,
  css,
  html,
  customElement,
  property,
  query,
  internalProperty,
} from 'lit-element';

import { TodoItem, TagList } from '../redux';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {
  @property({ type: Array }) todos: Array<TodoItem> = [
    {
      text: 'example 1',
      checked: false,
      index: 0,
    },
  ];

  @query('#addInput') addInput: HTMLInputElement | undefined;

  @internalProperty() inputEnabled: boolean;

  static get styles() {
    return css`
      ion-icon {
        vertical-align: middle;
      }

      #todo-list {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #todo-list fast-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      #add {
        display: flex;
        margin: 16px;
        width: 40%;
        justify-content: space-between;
      }

      .add-input {
        flex-grow: 1;
      }

      .add-button {
        margin-left: 8px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      .layout {
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        align-items: center;
        justify-content: center;
      }

      button {
        cursor: pointer;
      }

      fast-card {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        vertical-align: middle;

        padding: 8px;
      }

      @media (min-width: 1200px) {
        #welcomeCard,
        #infoCard {
          width: 40%;
        }
      }

      @media (screen-spanning: single-fold-vertical) {
        #todo-list {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media (prefers-color-scheme: light) {
        fast-card {
          --background-color: white;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <div class="layout">
        <h1>todos</h2>
        <div id="add">
          <fast-text-field id="addInput" class="add-input" placeholder="What needs to be done?" @keyup=${
            this.handleAddInput
          }></fast-text-field>
          <fast-button
            class="add-button"
            @click=${this.addTodoItem}
            .disabled=${!this.inputEnabled}>
            <ion-icon name="add-circle-outline"></ion-icon>
          </fast-button>
        </div>

        <div id="todo-list">${this.todos.map((item, i) =>
          this.renderTodoItem(item, i)
        )}</div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }

  renderTodoItem(item: TodoItem, index: number) {
    return html`
      <fast-card>
        <fast-checkbox .checked=${item.checked}>${item.text}</fast-checkbox>
        <fast-button
          appearance="stealth"
          @click=${() => this.deleteTodoItemAt(index)}
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </fast-button>

        <!-- ${item.tags && item.tags.length > 0
          ? this.renderTagList(item.tags)
          : undefined} -->
      </fast-card>
    `;
  }

  renderTagList(tags: TagList) {
    return tags.map((tag) => html`<fast-badge> ${tag} </fast-badge>`);
  }

  handleAddInput(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.addInput?.value) {
      this.addTodoItem();
    }
    this.inputEnabled = this.addInput?.value.length > 0;
  }

  addTodoItem() {
    this.todos.push({
      text: this.addInput?.value,
      checked: false,
      index: this.todos.length,
    });
    this.requestUpdate();
  }

  deleteTodoItemAt(index: number) {
    this.todos = this.todos.filter((el, i) => i !== index);
    this.requestUpdate();
  }
}
