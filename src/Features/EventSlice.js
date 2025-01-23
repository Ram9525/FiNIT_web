import { createSlice } from "@reduxjs/toolkit";

// Export static event data directly
export const EventData = [
  {
    id: 1,
    title: "Workshop",
    poweredBy: "zerodha",
    image: "https://media.gettyimages.com/id/1403918089/photo/business-leader-woman.jpg?s=612x612&w=0&k=20&c=h90SfLlof-dxsScM300BJh2x4JS8Esm-cFxnqXJEE4w=",
    description:
      "The Workshop is a finance-centric event designed to empower participants with practical financial skills. This event features hands-on sessions that teach essential financial tools and concepts such as investment strategies, financial modeling, and trading techniques. Participants will engage in real-world scenarios, utilizing tools like stock market simulators and financial analysis software to gain a deeper understanding of the intricacies of financial decision-making. Experts from the finance industry will guide participants, helping them sharpen their skills and better navigate the complex financial landscape.",
  },

  {
    id: 2,
    title: "Trade-a-thon",
    poweredBy: "Varsity",
    image:
      "https://media.gettyimages.com/id/1415672333/photo/indian-rupees-cash-banknotes-and-coins-and-stock-market-indicators.jpg?s=612x612&w=0&k=20&c=Gwn2shKC4W_BqQM7oMvvvRgYHcWTQnv_tWtyzhdwNtc=",
    description:
      "Trade-a-thon is a competitive finance event focused on simulating real-world trading environments. Participants will take on the role of traders, making decisions based on live market conditions and financial data. The event encourages participants to apply their knowledge of stock markets, derivatives, and trading algorithms in a fast-paced, high-pressure environment. By leveraging advanced financial strategies, participants will learn how to manage risk, optimize returns, and make quick, informed decisions under market volatility, preparing them for real-life trading challenges.",
  },

  {
    id: 3,
    title: "Budget-Pe-Charcha",
    poweredBy: "zerodha",
    image: "https://cdn.finshots.app/images/2024/07/BudgetNewsltterBOFM.jpg",
    description:
      "Budget-Pe-Charcha is an event that revolves around the analysis and discussion of national and global economic policies, especially focusing on the annual budget. The event brings together finance enthusiasts, analysts, and industry professionals to explore how budgetary decisions impact the financial markets, business strategies, and economic growth. Discussions will center on topics such as fiscal policy, taxation, government spending, and their implications on different sectors. Participants will gain insights into the financial planning process and learn how economic factors influence market dynamics.",
  },

  {
    id: 4,
    title: "Ideathon",
    poweredBy: "Varsity",
    image:
      "https://media.istockphoto.com/id/1051690398/photo/financial-growth-chart.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mb1Stzuw5_3YZFd5H6vqMbjOAOS3-8IfujWbftye_Bo=",
    description:
      "The Ideathon is an event aimed at generating innovative financial solutions that address current challenges in the finance industry. Participants will brainstorm and develop ideas that tackle real-world issues, such as improving financial inclusion, creating sustainable investment models, and enhancing financial literacy. By working on projects related to fintech, digital currencies, or investment strategies, participants will demonstrate how innovation can transform the financial sector. The Ideathon fosters creativity and entrepreneurial thinking, encouraging participants to develop viable financial solutions that can drive change and progress in the industry.",
  },

  {
    id: 5,
    title: "Guest Lecture",
    poweredBy: "zerodha",
    image: "https://media.gettyimages.com/id/1671499882/photo/speeker-talking-and-showing-a-presentation-to-audience-on-stage-with-microphone.jpg?s=612x612&w=0&k=20&c=h4M0Lx-p1ipWqdIrKYclgAs57s-O8PpLCaO-OouxRkI=",
    description:
      "The Guest Lecture series features finance thought leaders who share their expertise on key industry topics such as market trends, investment strategies, financial planning, and economic forecasting. These lectures provide valuable insights into the latest financial technologies, regulatory changes, and global economic shifts. Industry veterans from investment banks, fintech startups, and financial advisory firms will share their experiences, offering attendees a closer look at how they can navigate the financial world and make informed decisions in both personal and professional contexts. The lectures will also cover emerging topics such as sustainable finance, cryptocurrency, and impact investing.",
  },

  {
    id: 6,
    title: "Talkshow",
    poweredBy: "Varsity",
    image: "https://plus.unsplash.com/premium_photo-1664195074951-fe91ec456eed?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Talkshow brings together influential figures from the world of finance for lively discussions on current financial trends, innovations, and global economic issues. Industry experts, economists, and financial analysts will discuss topics like market fluctuations, financial policy changes, and the future of digital finance. The format allows for interactive conversations, where attendees can engage directly with speakers, ask questions, and gain practical knowledge on finance topics that shape both the local and global economy. The Talkshow serves as an open platform for sharing ideas and opinions, helping participants stay updated on the latest financial developments.",
  },
];

// Create the slice
const EventsSlice = createSlice({
  name: "events",
  initialState: {
    events: EventData, // Static data
    selectedEvent: null, // Store selected event
  },
  reducers: {
    selectEvent: (state, action) => {
      // Find and set the selected event by ID
      state.selectedEvent = state.events.find(
        (event) => event.id === action.payload
      );
    },
  },
});

// Export actions and reducer
export const { selectEvent } = EventsSlice.actions;
export default EventsSlice.reducer;
