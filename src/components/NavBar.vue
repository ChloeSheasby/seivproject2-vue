<template>
  <div>
    <table class='center transparent-background' width='100%'>
      <tr width='100%'>
        <td width='100%' style='text-align: left;'><button class='arrows' name="previous" v-on:click.prevent="getPrevious()">&#60;</button></td>
        <td></td>
        <td></td>
        <td width='100%' style='text-align: right;'><button class='arrows' name="next" v-on:click.prevent="getNext()">&#62;</button></td>
      </tr>
    </table>
  </div>
</template>