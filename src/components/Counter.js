import { ref } from "vue";

export const counter = ref(1);

export let cartQuantity = ref(0);

export const addToCart = () => {
  cartQuantity.value += counter.value;
};

export const resetCounter = () => {
  counter.value = 1;
};

// test below

export const isCartClicked = ref(false);
