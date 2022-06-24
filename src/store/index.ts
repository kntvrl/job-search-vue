import { InjectionKey } from "vue";
import { createStore,Store } from "vuex";
import state from "@/store/state";
import { GlobalState } from "@/store/types";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";

export const key: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore<GlobalState>({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
