import { Component, OnInit } from '@angular/core';


interface questions {
  status:boolean;
  question :string;
  description: string;
}
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questionsList : questions []
  descriptionText :string;
  constructor() {
    
      //initialization of hard coded questions array to display
    this.questionsList =[
      { 
        status:true,
        question :'How can an Essay Writing Service help you write a college essay?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'What is a college essay?',
        description: 'Nam egestas turpis enim, sed semper libero ullamcorper condimentum. Sed sollicitudin congue orci. Curabitur maximus vehicula lorem, sit amet tristique felis interdum eu. Aenean ullamcorper ultricies egestas. In auctor varius sapien. Etiam in cursus augue. Duis faucibus nunc sed ipsum laoreet, sed dignissim nunc ornare. Nunc feugiat diam nec lorem malesuada sollicitudin. Donec eu vehicula urna, eu consequat mauris. Aliquam hendrerit tortor vel turpis euismod lobortis. Integer eros velit, cursus et pellentesque eu, placerat nec est. Phasellus euismod augue eget nulla tristique faucibus. Ut elementum vehicula pretium. Nunc euismod gravida euismod. Ut eget lorem venenatis, commodo tellus convallis, blandit risus. Nullam ac tortor aliquet, venenatis urna at, ultrices neque. Mauris efficitur lorem leo, ac condimentum eros imperdiet in. Maecenas et est mauris. Quisque a diam eros.'
      },
      { 
        status:false,
        question :'How to write a college essay?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'What should i write about in my college essay?',
        description: 'Nam egestas turpis enim, sed semper libero ullamcorper condimentum. Sed sollicitudin congue orci. Curabitur maximus vehicula lorem, sit amet tristique felis interdum eu. Aenean ullamcorper ultricies egestas. In auctor varius sapien. Etiam in cursus augue. Duis faucibus nunc sed ipsum laoreet, sed dignissim nunc ornare. Nunc feugiat diam nec lorem malesuada sollicitudin. Donec eu vehicula urna, eu consequat mauris. Aliquam hendrerit tortor vel turpis euismod lobortis. Integer eros velit, cursus et pellentesque eu, placerat nec est. Phasellus euismod augue eget nulla tristique faucibus. Ut elementum vehicula pretium. Nunc euismod gravida euismod. Ut eget lorem venenatis, commodo tellus convallis, blandit risus. Nullam ac tortor aliquet, venenatis urna at, ultrices neque. Mauris efficitur lorem leo, ac condimentum eros imperdiet in. Maecenas et est mauris. Quisque a diam eros.'
      },
      { 
        status:false,
        question :'What you should not write in a college essay?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'College essay tips to write a strong essay',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'‘Write my college essay for me’ Help - 100% original and affordable',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'College Essay tips',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'What you should not write in a college essay?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'College essay tips to write a strong essay',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
      { 
        status:false,
        question :'‘Write my college essay for me’ Help - 100% original and affordable',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.'
      },
    ]

    this.descriptionText=this.questionsList[0].description
   }

  ngOnInit(): void {
  }

  makeQuestionActive(question:any)
  {
    for (let question of this.questionsList)
    {
      question.status=false
    }
      question.status=true
      this.descriptionText= question.description
  }

}
