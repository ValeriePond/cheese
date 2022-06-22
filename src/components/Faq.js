export const Faq = (props) => {
    return (<section className="pageFaq" id="Faq">
      <p>FAQ</p>
      <h1>Часто задаваемые вопросы</h1>
      <details open>
        <summary>Как сделать заказ?</summary>
        <div> Заказ можно оформить в разделе Магазин, а так же через WhatsApp по ссылке Связаться с Нами.
      </div></details>
      <details>
        <summary>Есть ли у вас доставка?</summary>
        <div>Доставка осуществляется в течение дня в черте стандартного квадрата города. Стоимость доставки 1000 тг, за пределы оговаривается отдельно, минимальный заказ 8000 тг. Свыше 20 000 тг доставка бесплатная.
      </div></details>
      <details>
        <summary>Есть ли у вас самовывоз?</summary>
        <div> Самовывоз осуществляется из города Каскелен.
      </div></details>
      <div className='emptyline'></div>
    </section>
    )
}