import { createStore } from 'vuex';

export default createStore({
 state: {
  recipes: [
   {
    slug: 'borch',
    title: 'Борщ',
    description: 'Вкусное блюдо для ежедневного упротребления',
    ingredients: [
     '3л воды',
     'Свекла 3шт',
     'Капуста белокочанная',
     'Свинина',
     'Картофель',
     'Морковь',
     'Лук репчатый',
     'Чеснок',
     'Рафинированное подсолнечное масло',
     'Томатная паста',
     'Укроп',
     'Петрушка',
     'Лавровый лист',
     'Приправа для супа',
    ],
    method: [
     'Налейте в кастрюлю холодную воду, выложите мясо и поставьте на средний огонь. Бульон будет вкуснее, если использовать именно мясо на кости.',
     'Вымойте и почистите свёклу, морковь и лук. Свёклу натрите на крупной тёрке, а морковь — на средней. Лук нарежьте небольшими кубиками.Налейте масло в сковороду, включите средний огонь. Обжаривайте лук и морковь, помешивая, около 5 минут.',
     'Когда бульон сварится, выньте из него мясо. Пока оно остывает, засыпьте в кастрюлю нашинкованную капусту. Через 5–10 минут добавьте нарезанный соломкой или кубиками картофель.',
    ],
   },
  ],
 },
 getters: {},
 mutations: {
  ADD_RECIPE(state, recipe) {
   state.recipes.push(recipe);
  },
 },
 actions: {},
 modules: {},
});
