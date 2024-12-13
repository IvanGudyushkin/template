
# Список задач для развертывания проекта

## 1. Определиться с расположением блоков, дизайном
- [ ] Определить расположение блоков
- [ ] Определить дизайн

## 2. Выполнить работу по дизайну
- [ ] Поменять переменные цветов
- [ ] Поменять шрифты
- [ ] Запустить скрипт по смене цветов для иконок
  - `cd src/Components/Contacts/images`
  - `python repaint.py FFFFFF`

## 3. Загрузить новую информацию
- [ ] Поменять название токена
- [ ] Поменять описание
- [ ] Поменять название сайта (подвал, шапка)
- [ ] Сделать резюме описания, поменять мета (название и вставить резюме)
- [ ] Поменять баннер
- [ ] Поменять лого и выполнить скрипт
  - `cd public`
  - `python create.logos.py`
- [ ] Вставить кнопку burnt или передать пропс pump в контакты

## 4. Запуск сайта на сервер
`python .\push_to_server.py 2`
- [ ] Проверка функциональности
- [ ] Проверка адаптаций
- [ ] Подвязка ссылок (приоритет: ВЫСОКИЙ)


# Памятка

### Все картинки в assets, лого в public
### Переменные цветов в index.css
### Отвязка на гит 
`git remote remove origin`
### Теперь есть UI компоненты CA и BurntButton