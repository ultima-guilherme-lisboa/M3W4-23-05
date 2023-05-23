
async function testeAsincrono () {

    console.log("print antes do procura video")

    var video = await procuraVideo(1).catch(
        (err) => {
            console.log("PAGINA DO YOUTUBE DE ERRO")
            console.log(err)
        }
    )

    console.log(video)

    console.log("print depois do procura video")
}


function procuraVideo (id) {
    return new Promise(function(resolve, reject) {    
        if (id == 1) {
            setTimeout(
                () => {
                    resolve({
                        video: {
                            id: 1,
                            descricao: "Video numero 1",
                            url: "https://you....."
                        }
                    })
                }, 3000
            )
        }else {
            reject({
                err: {
                    mensagem: "Video nao encontrado",
                    linkImg: "url da imagem para exibir na tela de tela"
                }
            })
        }
     });
}


testeAsincrono()
