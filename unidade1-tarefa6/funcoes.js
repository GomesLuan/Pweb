const carregarDiv = (is, div, heads=["Modelo","Cor","Tipo de combustível","Tipo de carro"], props=["make_and_model","color","fuel_type","car_type"]) => {
    const itensHtml = is.map(
        item => `<tr>
            <td>${item[props[0]]}</td>
            <td>${item[props[1]]}</td>
            <td>${item[props[2]]}</td>
            <td>${item[props[3]]}</td>
        </tr>`) 
    div.innerHTML = `<table>
        <tr>
            <th>${heads[0]}</th>
            <th>${heads[1]}</th>
            <th>${heads[2]}</th>
            <th>${heads[3]}</th>
        </tr>
        ${itensHtml.join("\n")}
    </table>`
}