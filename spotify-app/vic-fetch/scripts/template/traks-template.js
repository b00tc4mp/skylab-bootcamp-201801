//Template Card
function addTraksTemplate(res) {
  var listTraksTemplate = '';
  listTraksTemplate += `
                        <div class=" row modal modal-trak fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog col-12 col-md-10" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${res[0].artists[0].name}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">`
                              res.forEach(function (el) {
                                listTraksTemplate += `
                                <h5>${el.name}</h5>
                                <audio controls>
                                  <source src='${el.preview_url}'type='audio/mpeg'/>
                                          sjygjuggsaj
                                </audio>`
                              })
  listTraksTemplate += ` 
                              </div>
                            </div>
                          </div>
                        </div>`
  return listTraksTemplate
}


