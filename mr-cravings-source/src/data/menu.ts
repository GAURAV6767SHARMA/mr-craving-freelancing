import malai from "@/assets/malai-chaap.jpg";
import kulcha from "@/assets/nutri-kulcha.jpg";
import momos from "@/assets/paneer-momos.jpg";
import roll from "@/assets/afghani-roll.jpg";
import fries from "@/assets/peri-fries.jpg";
import mojitos from "@/assets/mojitos.jpg";

export type MenuItem = { name: string; note: string; img: string; alt: string };
export type MenuCategory = {
  id: string;
  label: string;
  group: "food" | "beverages";
  items: MenuItem[];
};

/** No prices anywhere — by client direction. */
export const categories: MenuCategory[] = [
  {
    id: "momos",
    label: "Momos",
    group: "food",
    items: [
      {
        name: "Paneer Momos (Steamed)",
        note: "Hand-folded, soft and juicy, with our fiery red chutney.",
        img: momos,
        alt: "Steamed paneer momos in a basket with red chutney, steam rising",
      },
      {
        name: "Paneer Momos (Tandoori)",
        note: "Same filling, kissed by the tandoor until lightly charred.",
        img: momos,
        alt: "Tandoori paneer momos with charred edges on a dark slate",
      },
      {
        name: "Whole Wheat Momos",
        note: "Nutty atta wrappers for a lighter, earthier bite.",
        img: momos,
        alt: "Whole wheat momos with golden brown wrappers in a steamer basket",
      },
      {
        name: "Afghani Momos",
        note: "Creamy white marinade, mild spice, deeply comforting.",
        img: momos,
        alt: "Afghani momos coated in creamy white marinade",
      },
    ],
  },
  {
    id: "chaap",
    label: "Soya Chaap",
    group: "food",
    items: [
      {
        name: "Malai Chaap",
        note: "Cream, cheese and cardamom marinade, grilled slow and soft.",
        img: malai,
        alt: "Malai chaap skewer close-up, cream marinade with light char",
      },
      {
        name: "Achari Chaap",
        note: "Tangy pickle spices with a mustard-seed kick.",
        img: malai,
        alt: "Achari soya chaap skewer with yellow pickle spice marinade",
      },
      {
        name: "Tandoori Soya Chaap",
        note: "The classic — smoky, spiced, straight off the skewer.",
        img: malai,
        alt: "Tandoori soya chaap skewer with red spice coating and char marks",
      },
      {
        name: "Cornflakes Crispy Chaap",
        note: "Crunchy cornflake crust, soft chaap centre.",
        img: fries,
        alt: "Crispy cornflake-coated soya chaap pieces",
      },
      {
        name: "Lemon Chaap",
        note: "Bright, zesty and light — the palate-cleanser of the lot.",
        img: malai,
        alt: "Lemon soya chaap skewer garnished with lemon wedges",
      },
      {
        name: "Chatpata Garlic Chaap",
        note: "Loud garlic, loud spice, absolutely no apologies.",
        img: malai,
        alt: "Garlic soya chaap tossed in dark chatpata masala",
      },
      {
        name: "Semi-Gravy Special Chaap",
        note: "Chaap in a thick masala gravy, best mopped up with kulcha.",
        img: kulcha,
        alt: "Soya chaap in thick semi-gravy masala in a bowl",
      },
    ],
  },
  {
    id: "rolls",
    label: "Rolls",
    group: "food",
    items: [
      {
        name: "Malai Chaap Roll",
        note: "Creamy chaap, crisp onions, soft roti — wrapped to go.",
        img: roll,
        alt: "Malai chaap roll in paper wrap, cut open to show creamy filling",
      },
      {
        name: "Afghani Chaap Roll",
        note: "Rich Afghani marinade, mint chutney, one-hand friendly.",
        img: roll,
        alt: "Afghani chaap roll cut open, creamy chaap and onions in a paper wrap",
      },
      {
        name: "Masala Chaap Roll",
        note: "Spiced chaap with onion and chutney for the bold crowd.",
        img: roll,
        alt: "Masala chaap roll wrapped in paper with spiced filling",
      },
    ],
  },
  {
    id: "kulcha",
    label: "Kulcha & Breads",
    group: "food",
    items: [
      {
        name: "Nutri Kulcha",
        note: "Crisp stuffed kulcha, buttered edges, Amritsari style.",
        img: kulcha,
        alt: "Amritsari nutri kulcha with spiced chickpea gravy and melting butter",
      },
      {
        name: "Amritsari Nutri Gravy with Kulcha",
        note: "Slow-cooked nutri gravy with a hot kulcha on the side.",
        img: kulcha,
        alt: "Bowl of Amritsari nutri gravy served with a golden kulcha",
      },
      {
        name: "Rumali Roti",
        note: "Paper-thin and pillowy — perfect for scooping gravy.",
        img: kulcha,
        alt: "Folded rumali roti stack on a dark surface",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    group: "food",
    items: [
      {
        name: "Peri Peri Fries",
        note: "Hot, crisp and dusted heavy with peri peri masala.",
        img: fries,
        alt: "Peri peri fries in a paper cone dusted with red spice",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    group: "beverages",
    items: [
      {
        name: "Virgin Mojito",
        note: "Mint, lime and soda — the reset button.",
        img: mojitos,
        alt: "Virgin mojito in a tall glass with mint leaves and lime slices",
      },
      {
        name: "Blueberry Mojito",
        note: "Sweet-tart blueberry over crushed mint and ice.",
        img: mojitos,
        alt: "Blueberry mojito in a tall glass with berries and mint",
      },
      {
        name: "Watermelon Mojito",
        note: "Cool watermelon pulp, mint, and a squeeze of lime.",
        img: mojitos,
        alt: "Watermelon mojito in a tall glass with watermelon cubes and mint",
      },
    ],
  },
];
