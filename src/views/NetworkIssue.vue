<template>
  <div>
    <h1>Ой, что-то пошло не так</h1>
    <h3>
      Похоже, у Вас возникли проблемы с сетью, пожалуйста,
      <br />нажмите кнопку назад и попробуйте снова
    </h3>
    <h4>
      Возможно у Вас не запущен json-server, пожалуйста,
      <br />откройте Терминал и выполните команду <br />из корневой директории
      проекта json-server --watch db.json
    </h4>
    <router-link :to="{ name: 'book-list' }">Вернуться на главную</router-link>
  </div>
</template>
