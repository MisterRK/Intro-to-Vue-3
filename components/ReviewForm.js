app.component('review-form', {
   template :
   /* html */
   `<form class='review-form' @submit.prevent="onSubmit">
   <h3>Leave us a Review</h3>
   <label for="name" >Name:</label>
   <input id='name' v-model='name'>

   <label for="review">Review:</label>
   <textarea id="review" cols="20" rows="5" v-model='review'></textarea>

   <label for="rating"></label>
   <select id="rating" v-model.number='rating'>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
   </select>

   <input class="button" type="submit" value="Submit">
</form>`,

   data(){
      return {
         name: '',
         review: '',
         rating: null
      }
   },

   methods: {
      onSubmit(){
         if (this.name === "" || this.review === "" || this.rating === null){
            alert("The review is incomplete! Please make sure you fill in all fields.")
            return
         }
         let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating
         }
         this.$emit('review-submitted', productReview)

         this.name = '';
         this.review = '';
         this.rating = null;
      }
   }
})