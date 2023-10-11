class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        //criando os elementos
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        
        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("img-path") || "assets/3177440.png";
        imagem.alt = this.getAttribute("img-alt");

        // pendurando os componentes na div principal: componentRoot
        componentRoot.appendChild(cardLeft);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(paragrafo);

        componentRoot.appendChild(cardRight);
        cardRight.appendChild(imagem);

        return componentRoot;
    }

    styles (){
        const style = document.createElement("style")
        style.textContent = `
        .card{
            width: 100%; 
            display: flex;
            flex-direction: row;
            box-shadow: 10px 10px 22px -4px rgba(0,0,0,0.17);
        
            justify-content: space-between;
        }
        
        
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 15px;
        }
        
        
        .card_left > span{
            font-weight: 300;
        }
        
        .card_left > h1{
            margin-top: 15px;
            font-size: 30px;
        }
        
        .card_left > p{
            color: rgb(71, 69, 69)
        }
        
        .card_right img{
            max-width: 400px;
            
        }
        
        `
        return style;
    }
}

customElements.define('card-news', CardNews)