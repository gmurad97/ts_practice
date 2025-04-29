// 1. Что делает эта запись?
// type Flatten<T> = T extends (infer U)[] ? U : T;
//незнаю

// 2. Что выведет TypeScript?
// type T = { a: number; b: string };
// type K = keyof T;
// keyof это получения ключей наверно ключи не уверен (незнаю)

// 3. Что делает Distributive Conditional Types? Пример?
//незнаю

// 4. Что выведет?
// type A = "a" | "b" | "c";
// type B = Exclude<A, "b">;
// exclude - это исключить значит "a" | "c"

// 5. Чем type отличается от interface, если речь идёт о слиянии и расширении?
// type в отличие от interface вроде нельзя слить через extends а найти пересечение и объединение

// 6. Как работает utility тип Pick<T, K>? Пример?
//незнаю

// 7. Что делает эта функция?
// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }
// value из аргументов неизвестное значение а возврат функции булевое значение(value принадлежит строке)
// uknown тип который нужно проверить прежде чем что то делать получается false скорее
// ну я тут тоже не уверен, я еще слабо знаю ts

// 8. Какой тип получится у Result?
// type Fn = (...args: any[]) => string;
// type Result = ReturnType<Fn>;
//незнаю

// 9. Объясни, как работает этот тип:
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: DeepReadonly<T[K]>;
// };
//незнаю

// 10. Что делает NonNullable<T>?
//незнаю наверно говорит о том что это не нулевой тип...