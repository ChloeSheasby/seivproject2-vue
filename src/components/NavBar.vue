<template>
  <div>
      <table class='center'>
        <tr>
          <td>
            <button name="previous" v-on:click.prevent="getPrevious()">Previous</button>
          </td>
          <td>
            <button name="next" v-on:click.prevent="getNext()">Next </button>
          </td>
        </tr>
      </table>
    </div>
</template>