
import React, { useEffect, useMemo, useState } from 'react';
import $nacelle from 'services/nacelle.js';

import * as styles from './Footer.styles';

const Footer = ({ space }) => {
  const [ newletterForm, setNewletterForm ] = useState(null);

  const currentYear = useMemo(()=>{
    const date = new Date();
    return date.getFullYear();
  }, [])

  const footerLinks = useMemo(()=>{
    const linklists = space && space.linklists;
    const footerPosition = linklists.length - 1;

    return linklists && linklists[footerPosition];
  }, [space])

  const threeCategoriesLinks = useMemo(()=>{
    return footerLinks ? footerLinks.links.slice(0, 3) : [];
  }, [footerLinks])

  const followUsLinks = useMemo(()=>{
    const links = footerLinks && footerLinks.links;
    const followUsLinksPosition = links.length - 1;
    return links && links[followUsLinksPosition];
  }, [footerLinks])

  const socialLinks = useMemo(()=>{
    return followUsLinks && followUsLinks.links.slice(0, 4);
  }, [followUsLinks])

  const hashtagLink = useMemo(()=>{
    const hashtagLinkPosition = followUsLinks.links.length - 1;
    return followUsLinks && followUsLinks.links[hashtagLinkPosition];
  }, [followUsLinks])

  useEffect(()=>{
    const fetchNewletterForm = async () => {
      const newletterForm = await $nacelle.data.content({ 
        handle: 'newletter-form',
        type: 'footer'
      });
      setNewletterForm(newletterForm.fields);
    }
    fetchNewletterForm();
  }, [])

  return (
    <footer css={styles.footer}>
      <div css={styles.footerContainer} className="container">
        <div className="row">
          <div className="row-4 row-sm-4 col-md-4">
            {newletterForm &&
              <div css={!newletterForm.showNewsletterForm && styles.hidden}>
                <h4 css={styles.title}>{newletterForm.newsletterTitle}</h4>
                <form>
                  <label htmlFor="email-service" css={styles.subscribeLabel}>Email Address</label>
                  <input css={styles.subscribeInput} id="email-service" type="email" value="" name="email" placeholder="Enter Your Email" required=""></input>
                  <input type="submit" name="subscribe" value="Subscribe" css={styles.button}/>
                </form>
              </div>
            }
            <h2 css={styles.title}>{followUsLinks.title}</h2>
            <ul css={styles.inlineList}>
              {
                socialLinks.map((link, key) => 
                  <li key={"social-link-" + key}>
                    <a css={styles[link.title.toLowerCase() + "Icon"]} className={"icon-fallback-text " + link.title.toLowerCase()} href={link.to} title={"Lovepop on " + link.title} target="_blank">
                      <span aria-hidden="true" className={"fa fa-" + link.title.toLowerCase()}></span>
                      <span css={styles.hidden} className="fallback-text">{link.title}</span>
                    </a>
                  </li>
                )
              }
              <li>
                <div css={styles.lovePopMomentLink}>
                  <a href={hashtagLink.to} title={hashtagLink.title} target="_blank">{hashtagLink.title}</a>
                </div>
              </li>
            </ul>
          </div>
          <div css={styles.footerLinksContainer} className="row-8 row-sm-8 col-md-8">
            <div className="row">
              {
                threeCategoriesLinks.map((categorie, key) => 
                  <div className="row-6 row-sm-6 col-md-6" key={"categories-" + key}>
                    <h4 css={styles.title}>{categorie.title}</h4>
                    <ul css={styles.link}>
                      {categorie.links.map((link, key) => 
                        <li key={"link-" + key + link.title}>
                          <a href={link.to}>{link.title}</a>
                        </li>
                      )}
                    </ul>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <h4 className="copyright" css={styles.copyright}>&#169; 2014-{currentYear} Lovepop. All rights reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
