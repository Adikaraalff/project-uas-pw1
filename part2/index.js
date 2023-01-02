let vm = new Vue({
  el: "#app",
  data: {
    dataPembeli: null,

    nama: null,
    alamat: null,
    nohp: null,
    alat: null,
  },
  methods: {
    savePembeli: function () {
      console.log("Button Simpan ditekan");
      let _data = {
        nama: this.nama,
        alamat: this.alamat,
        nohp: this.nohp,
        alat: this.alat
      };
      axios
        .post("https://api-new1.vercel.app/pembeli", _data)
        .then((response) => {
          console.log(response);
          $("#exampleModal").modal("hide");
          this.getPembeli();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePembeli(_id) {
      axios
        .delete("https://api-new1.vercel.app/pembeli/"+ _id)
        .then((response) => {
          this.getPembeli();
        })
        .catch(error =>{
            console.log(error);
        })
    },
    getPembeli() {
      axios.get("https://api-new1.vercel.app/pembeli").then((response) => {
        console.log(response);
        this.dataPembeli = response.data;
      });
    },
  },

  mounted() {
    this.getPembeli();
  },
});