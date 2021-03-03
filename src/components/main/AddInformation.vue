<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="save()" enctype="multipart/form-data">
          <v-text-field
            label="Name"
            required
            v-model="information.information_name"
          ></v-text-field>

          <input type="file" @change="selectFile" label="sekil" />

          <v-select
            required
            label="Kateqoriya"
            v-model="information.information_category"
            :items="options"
            item-text="category_id"
            item-id="category_id"
          >
          </v-select>

          <ckeditor
            required
            :editor="editor"
            v-model="information.information_text"
          ></ckeditor>

          <v-btn type="submit"> Reset Validation </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
/*import axios from "axios";*/
export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      selectedFile: "",
      information: {
        information_name: "",
        information_text: "",
        information_image: "",
        information_category: "",
      },
    };
  },
  computed: {
    options() {
      return this.$store.state.category.categories;
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
  },
  methods: {
    selectFile(e) {
      this.information.information_image = "/images/" + e.target.files[0].name;
    },
    /*save() {
      console.log("basladi");

      console.log(this.information);

      this.$store.dispatch("createInformation", {
        information_name: this.information.information_name,
        information_text: this.information.information_text,
        information_image: this.information.information_image,
        information_category: this.information.information_category,
      });
      (this.information.information_name = ""),
        (this.information.information_text = ""),
        (this.information.information_image = ""),
        (this.information.information_category = "");
    },*/
  },
};
</script>

<style>
.ck-editor .ck-editor__main .ck-content {
  min-height: 300px;
}
</style>