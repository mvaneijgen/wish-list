import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer f5125aed0f383716e33f9dedf5715b9ace5c3825';

export default function({ params, store }) {
  return axios
    .get(`https://beta.todoist.com/API/v8/tasks?project_id=2187923865`)
    .then(response => {
      // console.log(response);
      const allItems = response.data;

      let resultItems = [];

      allItems.forEach(element => {
        let content = element.content.split(' | ');
        let itemObj = {
          id: element.id,
          title: content[0],
          description: content[1],
          price: content[2],
          place: content[3],
          img: content[4],
        };

        resultItems.push(itemObj);
      });
      store.commit('add', resultItems);
    })
    .catch(function(error) {
      store.commit('error', error);
      // console.log(error);
    });

  // return axios
  //   .get(`https://beta.todoist.com/API/v8/projects/2187923865`)
  //   .then(response => {
  //     store.commit('description', response.data);
  //     console.log(response);
  //   });
}
