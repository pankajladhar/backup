export default class FormComponent extends Component {
  set form(formEl) {
    this._form = formEl;
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onSubmit(e);
    });
  }
}
