const text = ["Man braid authentic pug pinterest fit godard dreamcatcher jianbing yes plz food truck flannel shaman. Mustache selvage pug big mood pitchfork gorpcore. Adaptogen disrupt man braid, wolf af la croix keffiyeh kickstarter coloring book. Iceland chillwave tumeric hoodie, dreamcatcher DSA la croix fingerstache. Activated charcoal chambray actually la croix, twee gochujang venmo microdosing. Retro la croix palo santo cronut, activated charcoal sriracha kale chips PBR&B scenester vexillologist. Copper mug mukbang plaid, portland hot chicken four dollar toast succulents quinoa vaporware prism meditation chicharrones before they sold out.","Four loko live-edge af sartorial, subway tile viral kinfolk. Raclette edison bulb helvetica sus cornhole yes plz disrupt irony keffiyeh prism post-ironic. Microdosing health goth locavore tilde PBR&B cardigan readymade flexitarian next level fit pug austin tattooed. Blog cold-pressed biodiesel fashion axe DIY locavore gochujang put a bird on it pork belly cliche twee gentrify kickstarter polaroid. Marxism enamel pin tilde vegan iceland jianbing wolf jean shorts.","Sus vibecession quinoa coloring book, bodega boys ethical YOLO polaroid pinterest crucifix taxidermy actually. Jean shorts glossier next level hoodie bicycle rights tousled sus. Lyft pinterest kitsch neutral milk hotel, single-origin coffee synth yr cold-pressed. Cred health goth hoodie lumbersexual tumeric mixtape. Four loko gastropub biodiesel, flannel quinoa yr taiyaki organic green juice 90's microdosing celiac. Big mood kickstarter knausgaard four loko synth helvetica swag. Yuccie cronut authentic af lomo post-ironic narwhal.",
"Drinking vinegar meditation glossier snackwave leggings. Vibecession migas activated charcoal, taiyaki try-hard cardigan tonx hella cold-pressed chillwave YOLO squid. Vegan pabst craft beer keytar organic sartorial thundercats, vice hella YOLO. Celiac squid kitsch XOXO sartorial slow-carb drinking vinegar man bun you probably haven't heard of them disrupt. Vaporware ascot selvage photo booth copper mug. Aesthetic quinoa selfies hashtag squid succulents pok pok ennui pop-up four dollar toast poutine bitters yes plz. Pug bruh raw denim food truck, austin affogato pitchfork sartorial lo-fi man braid chartreuse truffaut fam raclette.","Glossier chia coloring book irony gluten-free vexillologist lumbersexual tote bag street art direct trade yuccie chillwave PBR&B farm-to-table subway tile. Offal beard iPhone craft beer pop-up, helvetica ascot gochujang. Vice semiotics artisan YOLO shabby chic salvia. Truffaut fashion axe adaptogen cold-pressed. Ascot vice before they sold out keytar williamsburg green juice, 8-bit vinyl.","Pinterest franzen squid mumblecore. Sus etsy everyday carry skateboard same glossier mumblecore ramps sustainable beard. Bushwick tofu schlitz crucifix aesthetic keytar. Cold-pressed forage paleo, wolf coloring book copper mug activated charcoal YOLO farm-to-table microdosing DSA glossier messenger bag jean shorts.","Mlkshk ugh same food truck cray af. Crucifix wolf kickstarter kitsch, bushwick fanny pack hoodie health goth bespoke organic. Master cleanse slow-carb palo santo biodiesel shaman readymade fixie. Truffaut four loko shoreditch letterpress dreamcatcher marxism pitchfork poke. Intelligentsia irony bruh single-origin coffee, shoreditch pok pok grailed vibecession semiotics sartorial yes plz polaroid.","Sus schlitz vegan deep v hoodie lo-fi enamel pin fam ugh kombucha crucifix butcher thundercats kickstarter. Wayfarers hell of cold-pressed skateboard enamel pin four dollar toast meh selfies literally marxism gorpcore fam taxidermy. Viral hot chicken whatever wayfarers aesthetic. Hammock af chartreuse affogato fam plaid cred PBR&B sartorial fanny pack hella. Mukbang disrupt literally put a bird on it narwhal swag tofu edison bulb raclette kogi microdosing."]


const btn = document.getElementById("btn");
const result = document.getElementById("result");
const content = document.getElementById("content");

generateText = () => {
    var input = document.getElementById("text").value;
    if (input > 8) {
        input = 8;
    }
    var i;
    for(i=0;i<input;i++){
        var newDiv = document.createElement("div");
        var newBr = document.createElement("br");
        var newContent = document.createTextNode(text[i]);
        newDiv.appendChild(newContent);
        result.appendChild(newBr);
        result.appendChild(newDiv);
    }
    
}
removeChildren = () => {
    result.innerHTML = ''
    console.log(text.length)
}
// btn.addEventListener("click",generateText())