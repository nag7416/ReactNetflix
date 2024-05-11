import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home(){

    useEffect(() => {
        const con = document.querySelectorAll('.faq .con');

        con.forEach((con, index) => {
            con.addEventListener('click', () => {
                const hiddenContainers = document.querySelectorAll('.faq .hidden');
                const clickedContainer = hiddenContainers[index];
                const plusicons = document.querySelectorAll('.faq .plusicon');

                clickedContainer.classList.toggle('active');

                plusicons[index].classList.toggle('active');

                hiddenContainers.forEach((container, i) => {
                    if (container !== clickedContainer) {
                        container.classList.remove('active');
                        plusicons[i].classList.remove('active');
                    }
                });
            });
        });
    }, [])
    return (
        <>
            <Navbar />

            <header>
                <div class="banner-inner">
                    <h2>Unlimited movies, TV shows and more</h2>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                    <div class="subscription">
                        <form action="#">
                            <input type="text" placeholder="Email address" />
                            <button>Get Started</button>
                        </form>
                    </div>
                </div>
            </header>




            <section class="tv_section">
                <div class="tv_inner">
                    <div class="left">
                        <h3>Enjoy on your TV</h3>
                        <p>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div class="right">
                        <div class="tvinner">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                            <div class="tvvideo">
                                <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay loop muted></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tv_section download">
                <div class="tv_inner">
                    <div class="left">
                        <div class="tvinner">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                            <div class="notedownload">
                                <div class="leftimage">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                </div>
                                <div class="moviename">
                                    <span>Stranger Things</span>
                                    <label>Downloading...</label>
                                </div>
                                <div class="downloadgif">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <h3>Download your shows to watch offline</h3>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
            </section>

            <section class="tv_section">
                <div class="tv_inner">
                    <div class="left">
                        <h3>Watch everywhere</h3>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div class="right">
                        <div class="tvinner">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                            <div class="computervideo">
                                <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoplay loop muted></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tv_section download">
                <div class="tv_inner">
                    <div class="left">
                        <div class="tvinner">
                            <img src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
                        </div>
                    </div>
                    <div class="right">
                        <h3>Create profiles for kids</h3>
                        <p>Send children on adventures with their favourite characters in a space made just for them free with your membership.</p>
                    </div>
                </div>
            </section>

            <section class="faq">
                <div class="faqinner">
                    <h2>Frequently Asked Questions</h2>
                    <div class="cons">
                        <div class="con">
                            <div class="note">
                                <div class="notetext">
                                    <label>What is Netflix?</label>
                                </div>
                                <div class="plusicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <div class="hidden">
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                        <div class="con">
                            <div class="note">
                                <div class="notetext">
                                    <label>How much does Netflix cost?</label>
                                </div>
                                <div class="plusicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <div class="hidden">
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                            </div>
                        </div>
                        <div class="con">
                            <div class="note">
                                <div class="notetext">
                                    <label>Where can I watch?</label>
                                </div>
                                <div class="plusicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <div class="hidden">
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                            </div>
                        </div>
                        <div class="con">
                            <div class="note">
                                <div class="notetext">
                                    <label>How do I cancel?</label>
                                </div>
                                <div class="plusicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <div class="hidden">
                                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                            </div>
                        </div>
                        <div class="con">
                            <div class="note">
                                <div class="notetext">
                                    <label>What can I watch on Netflix?</label>
                                </div>
                                <div class="plusicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <div class="hidden">
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                            </div>
                        </div>
                        <div class="con">
                            <div class="note">
                                <div class="notetext">
                                    <label>Is Netlix good for kids?</label>
                                </div>
                                <div class="plusicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <div class="hidden">
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                            </div>
                        </div>
                    </div>

                    <div class="subscribe">
                        <label>Ready to watch? Enter your email to create or restart your membership.</label>
                        <div class="emailbox">
                            <form action="#">
                                <input type="text" placeholder="Email address" />
                                <button>Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <footer class="footer">
                <span>Questions? Call <a href="#">000-800-919-1694</a></span>
                <div class="inner">
                    <div class="box one">
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Speed Test</a></li>
                        </ul>
                    </div>
                    <div class="box two">
                        <ul>
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Cookie Preferences</a></li>
                            <li><a href="#">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div class="box three">
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Ways to Watch</a></li>
                            <li><a href="#">Corporate Information</a></li>
                            <li><a href="#">Only on Netflix</a></li>
                        </ul>
                    </div>
                    <div class="box four">
                        <ul>
                            <li><a href="#">Media Centre</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="language">
                    <select>
                        <option selected>English</option>
                        <option>Hindi</option>
                    </select>
                    <p>Netflix India</p>
                </div>
            </footer>
        </>
    )
}