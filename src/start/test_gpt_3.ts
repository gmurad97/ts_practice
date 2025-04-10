// 🔴 Уровень 3 — Тяжёлый
// 1. Что делает этот тип?
// type Nullable<T> = T | null;
// незнаю

// 2. Что делает infer в условных типах? Пример?
// незнаю но знаю что использует для вывода типов в условных типов

// 3. Что выведет код?
// type T1 = string extends string | number ? "yes" : "no";
// у нас имеется тип T1 строка которая расширяет string и поле number которое принимает yes/no

// 4. Есть тип:
// type User = { id: number; name: string; email: string; };
// Создай тип без email.
// type User = {
// 	id: number;
// 	name: string;
// 	email: string;
// }

// type User1 = {
// 	id: number;
// 	name: string;
// }

// 5. Что выведет TypeScript?
// type A = { a: number };
// type B = { b: string };
// type C = A & B;
// const val: C = { a: 1, b: "hi" };
// a: 1, b: "hi"

// 6. Напиши тип, который из типа T делает все поля optional, но только те, что изначально string.
// незнаю

// 7. Что делает utility type Exclude<T, U>?
// незнаю

// 8. В чём разница между Partial<T> и Required<T>?
// незнаю / но чисто логически решу partial частично и required обязательные типы

// 9. Что делает ReturnType<T>? Пример?
//незнаю скорее возвращает новый тип

// 10. Что выведет?
// type Fn = (a: number, b: string) => boolean;
// type Params = Parameters<Fn>;
// незнаю