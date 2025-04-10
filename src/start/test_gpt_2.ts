// 🟡 Уровень 2 — Нормальный
// 1. В чём разница между interface и type?
// незнаю.но отвечу так interface это то что мы наследуем и реализуем
// а типы которые доступны для использование явные типы

// 2. Можно ли наследовать от нескольких интерфейсов? Пример?
// Да можно
// interface A{
// 	a: string;
// }
// interface B {
// 	b: string;
// }
// interface C extends A,B{
// 	c: boolean;
// }

// 3. Что выведет код?
// type Status = "success" | "error" | "loading";
// let s: Status = "idle";
// Даст ошибку типа, пример что такого типа в списке нет

// 4. Преобразуй этот объект в тип:
// const user = {
// 	id: 1,
// 	name: "Murad",
// 	isAdmin: false
// };
// type User = {
// 	id: number;
// 	name: string;
// 	isAdmin: boolean;
// }

// 5. Что делает keyof?
// keyof возвращает ключи type или inteface

// 6. Что выведет?
// type A = { x: number };
// type B = A & { y: string };
// const obj: B = { x: 1, y: "hello" };
// console.log(obj.y);
//ответ hello

// 7. Что такое тип never и когда он используется?
// тип never означает что никогда не завершится и используется когда функция не может
// коректно завершиться из за выброса ошибки или бесконечного цикла как пример

// 8. Есть тип:
// type Point = { x: number, y: number; };
// Сделай тип, где все поля необязательные.
// type Point = { x?: number, y?: number; };

// 9. Зачем нужен дженерик <T>?
// незнаю

// 10. Напиши функцию, принимающую массив элементов любого типа и возвращающую его первый элемент.
// const firstElement = (arr: Array<undefined>): undefined => {
// 	return arr[0];
// };

// 11. Как работает Record<Keys, Type>?
// незнаю

// 12. Есть enum Role { Admin, User, Guest }. Что выведет:
// enum Role {
// 	Admin,
// 	User,
// 	Guest
// }
// console.log(Role[1]);
// Admin - 0
// User - 1 - будет User
// Guest - 2

// 13. Напиши тип, который принимает объект и делает все поля readonly.
// type User = {
// 	readonly id: number;
// 	readonly name: string;
// 	readonly email: string;
// }

// 14. Что делает оператор in при работе с типами?
// незнаю

// 15. В чём разница между extends в классе и extends в дженериках?
// незнаю

