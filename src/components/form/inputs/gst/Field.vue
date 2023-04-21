<template>
  <ApolloQuery
    :skip="true"
    clientId="public"
    :query="
      (gql) =>
        gql`
          ${$options.getCompanyName}
        `
    "
    :variables="variables"
    @error="notifyError($event.message)"
    @result="onResult"
  >
    <!-- :variables="variables" -->
    <template #default="{ query }">
      <q-form @submit="() => null">
        <GstInput
          v-model="gst"
          :loading="query.loading"
          @valid="handleValidInput(query)"
          @invalid="handleInvalidInput(query)"
        />

        <BiButton label="Next" icon="lock" type="submit" color="primary" />
      </q-form>
    </template>
  </ApolloQuery>
</template>

<script>
import { ApolloQuery } from '@vue/apollo-components';
import getCompanyName from 'graph/company/getCompanyName.gql';
import GstInput from './GST.vue';
import { useAlert } from 'src/composables/useAlert';
export default {
  getCompanyName,
  components: {
    ApolloQuery,
    GstInput
  },
  data() {
    return {
      gst: null
    };
  },
  setup() {
    const { notifyError, notifySuccess } = useAlert();
    return {
      notifyError,
      notifySuccess
    };
  },
  computed: {
    variables() {
      return {
        gstNo: this.gst
      };
    }
  },
  methods: {
    handleValidInput(query) {
      // Restarting the query process if disabled earlier
      query.skip = false;
      query.start();
      this.$emit('valid', this.gst);
    },
    handleInvalidInput(query) {
      // Skipping the query hit process since each time , apollo is making request which is not needed in case of invalid input
      if (!query.skip) {
        query.skip = true;
      }
    },
    onResult($event) {
      console.log('event-->', $event);

      if (!$event.error) {
        this.notifySuccess('Gst Number validation success');
        this.$emit('next', {
          gstNo: this.gst
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
