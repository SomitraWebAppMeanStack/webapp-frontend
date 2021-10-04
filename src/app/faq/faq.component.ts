import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  faqFirst=[
    {
      heading:" Where will the developers work from?",
      pera:" You'll be working with developers from our central office in London, UK. We provide all of the tech experts  with the necessary tools and equipment so they can focus on your digital product and nothing else.Whether you  like Slack, Google Meet, mail, phone, or any other method of communication you prefer, you can always communicate with them directly. You'll always know what WebApp developers are working on thanks to Jira, a project management tool. Every one of our developers speaks fluent English and is very responsive."
    },
    {
      heading:"     What technologies does WebApp cover?",
      pera:"The technology stack we use for your project is always tailored to your needs. There are several programming languages used by our company. We provide back-end development in Ruby on Rails and Node JS, but we also offer support for C++, Clojure, Django, Go, Elixir, Java, Lisp, PHP, Python, Rust, Scala. Our front-end development uses modern front-end frameworks such as Vue.js, React, and Angular. As well as developing websites, we use content management systems like WordPress."
    },
    {
      heading:" How do you track time?",
      pera:"The work done is usually tracked by Hubstaff integrated with Jira or a time tracking tool of your choice, so you can see how long developers spend on each task. If you would like to work another way, we are always happy to help. Your development team will also have a dedicated account manager who will attend weekly meetings so you can keep up, summarize the work done, and plan the next steps. If something comes up, they’re also available at any time."
    },
    {
      heading:" What makes WebApp different? WebApp vs Agencies?",
      pera:"The work done is usually tracked by Hubstaff integrated with Jira or a time tracking tool of your choice, so you can see how long developers spend on each task. If you would like to work another way, we are always happy to help. Your development team will also have a dedicated account manager who will attend weekly meetings so you can keep up, summarize the work done, and plan the next steps. If something comes up, they’re also available at any time. "
    }
  ]
}
