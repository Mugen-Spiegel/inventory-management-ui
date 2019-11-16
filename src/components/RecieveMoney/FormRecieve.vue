<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="reference_number"
            :rules="nameRules"
            :counter="10"
            label="Reference Number"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="sender"
            :rules="nameRules"
            :counter="10"
            label="Sender"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="reciever"
            :rules="nameRules"
            label="Reciever"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      reference_number: '',
      sender: '',
      nameRules: [
        v => !!v || 'This is required',
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
    }),
  }
</script>