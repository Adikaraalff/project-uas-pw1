let vm = new Vue({
  el: "#app",
  data: {
    title: "Data API Pembeli",
    description: "Data API dideploy di vercel.app",
    dataPembeli: null,

    nama: null,
    alamat: null,
    nohp: null,
    makanan: null,
    minuman: null,
  },
  methods: {
    savePembeli: function () {
      console.log("Button Simpan ditekan");
      let _data = {
        nama: this.nama,
        alamat: this.alamat,
        nohp: this.nohp,
        makanan: this.makanan,
        minuman: this.minuman
      };
      axios
        .post("https://api-beta-test.vercel.app/pembeli", _data)
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
        .delete("https://api-beta-test.vercel.app/pembeli/"+ _id)
        .then((response) => {
          this.getPembeli();
        })
        .catch(error =>{
            console.log(error);
        })
    },
    getPembeli() {
      axios.get("https://api-beta-test.vercel.app/pembeli").then((response) => {
        console.log(response);
        this.dataPembeli = response.data;
      });
    },
  },

  mounted() {
    this.getPembeli();
  },
});
