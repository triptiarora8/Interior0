"use client";

import { useState } from "react";

export default function Faq({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          // .reveal sits on a wrapper so React re-renders of the item don't wipe .is-visible
          <div key={item.q} className="reveal">
            <div className={`faq__item${isOpen ? " is-open" : ""}`}>
              <button className="faq__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                {item.q}
                <span className="faq__icon"></span>
              </button>
              <div className="faq__a">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
