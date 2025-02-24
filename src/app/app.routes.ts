import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'destination',
        component:DestinationComponent
    },
    {
        path:'destination-details',
        component:DestinationDetailsComponent
    },
    {
        path:'elements',
        component:ElementsComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'single-blog',
        component:SingleBlogComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
