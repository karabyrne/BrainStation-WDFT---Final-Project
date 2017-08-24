import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const avatarStyle = { margin: 5 };


class Blog extends React.Component {

    render() {
        const style = {
            fontSize: 18
        };
        return (
            <div className="clearing clearfix">
                <div className="hero-image-blog">
                    <div className="hero-text">
                        <h1>Learn to do something you love</h1>
                    </div>
                </div>
                {/* <div className="blogPost">
                    <h2>Finding "The One"</h2>
                    <h4>The subtle art of not settling</h4>
                </div> */}
                <Card>
                    <div className="card col-xs-12 col-sm-8 col-sm-offset-2">
                        <CardHeader
                            title='Finding "The One"'
                            subtitle="The subtle art of not settling"
                        />
                        <CardMedia
                            className="card-image"
                        >
                            <img src="/assets/blog-post-image.jpg" alt="solo traveller" />
                        </CardMedia>
                        <CardTitle title="If you have yet to find your perfect match, you need to read this." />
                        <CardText style={style}>
                            <div>
                                <p className="paragraph">Finding the right partner isn't easy. It requires time, effort, and a financial or emotional investment that we fear will have no return. It's something we don't worry about all that much when we're young - after all, who wants to commit to just one partner when there are so many opportunities and experiences waiting to be had? We know what type of partner we were made for, and we'll eventually find the perfect match.</p>
                                    
                                <p className="paragraph">As life goes on, we see others beginning to choose 'the one.' As these 'partner' milestones begin to happen all around us - you know, those contracts that ensure we'll stay with a partner until we're old and grey, we begin to wonder why we haven't found a long-term prospect for ourselves.  We question why we are not worthy of that type of commitment, reward or recognition. Why can't we be given a life of security and loyalty after so much time spent developing ourselves and all the things we have to offer?

                                And then a potential partner comes along and they have some of these qualities we've heard are so incredibly important for our future. The benefits of a such an arrangement begin to appeal to us: a mortgage suddenly becomes a possibility, vacations once (maybe twice) a year look like something we could be into, and the overall security of knowing a partner is going to provide us certain things we need is hard to ignore.

                                For some of us (the rare, tiny little fraction of us), that partner might be an absolute dream, perfect for us in every way imaginable. We experience laughter, appreciation, loyalty, special 'perks' for performing well, and a sense of fulfilment day in and day out that we couldn't live without. For others, our partner is... sub-par, to be polite. While the whole, "I have a steady partner" thing makes us feel like we fit in with the rest of society, somewhere deep down we know something just isn't right. Some of us even go so far as to stay with a partner that is abusive, manipulative, and completely disconnected from our needs and desires. Sometimes we wake up in the middle of the night, ridden with anxiety about the day ahead, the nagging feeling that we were meant for a different partner, a different path. We even contemplate the idea of walking away, toward happiness and a purpose that brings us pure joy.</p>   

                                
                                <p className="paragraph">I'm here to tell you that if you've settled for a partner that doesn't fulfil you, you should stay put. Happiness is a shiny object that you shouldn't let distract you from your priorities. You have bills to pay, you (might) have mouths to feed, a retirement to plan for, and a lot of social judgement that is easily avoided by sticking it out, no matter how miserable you are. I mean, how irresponsible are you to think that you can just change your mind? You may feel like you're imprisoned and uninspired but that's life, not everyone is pretty enough, talented enough, or strong enough to go for greatness. You're foolish to give up stability to strive for passion and the kind of love that will allow you to live the life you've always dreamed of.</p>



                                <p className="paragraph"><strong>I'M JUST KIDDING...</strong></p>



                                <p className="paragraph">How enraged are you right now? How could I possibly suggest that you live out a miserable life with a partner that you don't love?? That's absurd. Your partner is the person you spend the most time with, put the most energy into, and expect the most satisfaction from in order to be happy every single day.</p>

                                <p className="paragraph"><strong>QUICK REALITY CHECK:</strong></p>

                                <p className="paragraph">Your partner doesn't take up most of your time, your <em>career</em> does. Take a moment, read the article again, and every time you see the word <strong><em>partner</em></strong> replace it with the word <strong><em>career</em></strong>. If you wouldn't give your precious time away to an insignificant other, why on earth would you concede to whittling your days away for some form of mediocre livelihood?

                                So many of us use these very same excuses to convince ourselves that we shouldn't leave the job we're in, and it's just as absurd (arguably, more absurd), than accepting a lifetime with a person we do not love. Sometimes out of fear, sometimes out of comfort, and sometimes out of a lack of self-confidence, we settle - we accept convenience and convention over inspiration and courage. But, at the end of the day, it is a choice.</p>

                                <p className="paragraph">So, you choose. You can take the romance out of it and stay married to your meaningless job, or you can open your eyes to the world of opportunity around you and do the thing you were made to do.</p>
                            </div>
                        </CardText>
                    </div>
                </Card>
                <div className="avatar col-xs-12 col-sm-6 col-sm-offset-3">
                    <span className="author-bio">
                        <Avatar
                            src="/assets/taj-me.jpg"
                            size={130}
                            style={avatarStyle}
                        />
                        <strong>Author: Kara Byrne</strong>
                            {/* Kara is a writer/videographer/fullstack developer and world traveller with a passion
                            for using digital mediums to create things that will have a positive imapct
                            on the world. */}
                        </span>
                </div>
            </div>
        )
    }
}

export default Blog; 
