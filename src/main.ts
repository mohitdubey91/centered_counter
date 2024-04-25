import { factory } from "./factory";

let count = factory(0, 1);
const start_at_control = document.getElementById("start_at") as HTMLInputElement;
const step_control = document.getElementById("step") as HTMLInputElement;
const count_button = document.querySelector(".count_button") as HTMLButtonElement;
const current_count = document.querySelector(".current_count") as HTMLSpanElement;

function update_count_and_reset_counter() {
  count = factory(parseInt(start_at_control.value), parseInt(step_control.value));
  update_count();
}

start_at_control?.addEventListener("change", update_count_and_reset_counter);
step_control?.addEventListener("change", update_count_and_reset_counter);

function update_count() {
  const value = count();
  current_count.textContent = value.toString();
}

count_button.addEventListener("click", update_count);
