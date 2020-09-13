import React, { useEffect } from 'react';
import '../index.css';

import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(6, 10),
	},
	bold: {
		fontWeight: 700,
		padding: theme.spacing(0.8, 0)
	}
}));

function Legal() {
	const classes = useStyles();
	useEffect(() => {
		document.title = "Privacy Policy";  
  });
  return (
		<div className={classes.heroContent}>
			<Container maxWidth="md">
				<Typography variant="h4" style={{ paddingBottom: 10 }} gutterBottom>
					Privacy Policy
				</Typography>

				<Typography variant="body1" gutterBottom>
				This privacy policy ("Policy") describes how VoGro ("VoGro", "we", "us" or "our") collects, protects and uses the personally identifiable information ("Personal Information") you ("User", "you" or "your") may provide on the VoGro website and application and any of its products or services (collectively, "Website" or "Services"). It also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Automatic collection of information
				</Typography>
				<Typography variant="body1" gutterBottom>
					When you visit the Website our servers automatically record information that your browser sends. This data may include information such as your device's IP address, browser type and version, operating system type and version, language preferences or the web page you were visiting before you came to our Website, pages of our Website that you visit, the time spent on those pages, information you search for on our Website, access times and dates, and other statistics. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding Website usage. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Collection of personal information
				</Typography>
				<Typography variant="body1" gutterBottom>
					You can visit the Website/Application without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the Website's/application features, you will be asked to log in through Facebook or Google (for example, your name and email address). We do not store any information when you create an account, or fill any online forms on the Website, all of them are done through Google/Facebook. However, when required, some information that we do store may include the following:
				</Typography>
				<ul>
					<li><Typography variant="body1" gutterBottom>Location (to match you with a helper)</Typography></li>
					<li><Typography variant="body1" gutterBottom>Account details such as username, unique user ID, password, etc.</Typography></li>
				</ul>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Proof of identity such as photocopy of a government ID.
				</Typography>
				<Typography variant="body1" gutterBottom>
					Proof of Identity is required to prevent abuse of the system and or for legal reasons. However, all Verification of ID this is done through a third party named ‘persona’, nothing comes through our servers. Users who are uncertain about what information is mandatory are welcome to contact us.
				</Typography>
				
				<Typography variant="body1" className={classes.bold} gutterBottom>
					Managing personal information
				</Typography>
				<Typography variant="body1" gutterBottom>
					You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Website or Services change. When you delete Personal Information, however, we may maintain a copy of the unrevised Personal Information in our records for the duration necessary to comply with our obligations to our affiliates and partners, and for the purposes described below. If you would like to delete your Personal Information or permanently delete your account, you can do so by contacting us.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Storing personal information
				</Typography>
				<Typography variant="body1" gutterBottom>
					We will retain and use your Personal Information for the period necessary to comply with our legal obligations, resolve disputes, and enforce our agreements unless a longer retention period is required or permitted by law. We may use any aggregated data derived from or incorporate your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after the expiration of the retention period.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Use and processing of collected information
				</Typography>
				<Typography variant="body1" gutterBottom>
					In order to make our Website and Services available to you, or to meet a legal obligation, we need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Some of the information we collect is directly from you via our Website. However, we may also collect Personal Information about you from other sources such as social media, emails, etc. Any of the information we collect from you may be used for the following purposes:​
				</Typography>
				<ul>
					<li><Typography variant="body1" gutterBottom>Create and manage user accounts</Typography></li>
					<li><Typography variant="body1" gutterBottom>Deliver products or services</Typography></li>
					<li><Typography variant="body1" gutterBottom>Improve products and services</Typography></li>
					<li><Typography variant="body1" gutterBottom>Send administrative information</Typography></li>
					<li><Typography variant="body1" gutterBottom>Respond to inquiries and offer support</Typography></li>
					<li><Typography variant="body1" gutterBottom>Request user feedback</Typography></li>
					<li><Typography variant="body1" gutterBottom>Improve user experience</Typography></li>
					<li><Typography variant="body1" gutterBottom>Enforce terms and conditions and policies</Typography></li>
					<li><Typography variant="body1" gutterBottom>Protect from abuse and malicious users</Typography></li>
					<li><Typography variant="body1" gutterBottom>Respond to legal requests and prevent harm</Typography></li>
					<li><Typography variant="body1" gutterBottom>Run and operate our Website and Services</Typography></li>
				</ul>
				<Typography variant="body1" gutterBottom>
					Processing your Personal Information depends on how you interact with our Website, where you are located in the world and if one of the following applies: (i) You have given your consent for one or more specific purposes. This, however, does not apply, whenever the processing of Personal Information is subject to Freedom of Information and Protection of Privacy Act (FIPPA); (ii) Provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (iii) Processing is necessary for compliance with a legal obligation to which you are subject; (iv) Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) Processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.
				</Typography>
				<Typography variant="body1" gutterBottom>
					Note that under some legislation we may be allowed to process information until you object to such processing (by opting out), without having to rely on consent or any other of the following legal bases below. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					The rights of users
				</Typography>
				<Typography variant="body1" gutterBottom>
					You may exercise certain rights regarding your information processed by us. In particular, you have the right to do the following: (i) you have the right to withdraw consent where you have previously given your consent to the processing of your information; (ii) you have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent; (iii) you have the right to learn if information is being processed by us, obtain disclosure regarding certain aspects of the processing and obtain a copy of the information undergoing processing; (iv) you have the right to verify the accuracy of your information and ask for it to be updated or corrected; (v) you have the right, under certain circumstances, to restrict the processing of your information, in which case, we will not process your information for any purpose other than storing it; (vi) you have the right, under certain circumstances, to obtain the erasure of your Personal Information from us; (vii) you have the right to receive your information in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that your information is processed by automated means and that the processing is based on your consent, on a contract which you are part of or on pre-contractual obligations thereof.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					The right to object to processing
				</Typography>
				<Typography variant="body1" gutterBottom>
					Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection. None of your Personal Information will ever be processed by us for direct marketing purposes, you can object to your Google/Facebook account(s) for processing at any time without providing any justification. To learn, whether we are processing Personal Information for direct marketing purposes, you may refer to the relevant sections of this document.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					How to exercise these rights
				</Typography>
				<Typography variant="body1" gutterBottom>
					Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Privacy of children
				</Typography>
				<Typography variant="body1" gutterBottom>
					We do not knowingly collect any Personal Information from children under the age of 16. If you are under the age of 16, please do not submit any Personal Information through our Website or Service. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through our Website or Service without their permission. If you have reason to believe that a child under the age of 16 has provided Personal Information to us through our Website or Service, please contact us and we will get this removed in as soon as possible. You also must also be at least 16 years of age to consent to the processing of your Personal Information.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Newsletters
				</Typography>
				<Typography variant="body1" gutterBottom>
					We offer electronic newsletters to which you may voluntarily subscribe at any time. We are committed to keeping your e-mail address confidential and will not disclose your email address to any third parties except as allowed in the information use and processing section or for the purposes of utilizing a third-party provider to send such emails. We will maintain the information sent via e-mail in accordance with applicable laws and regulations. In compliance with the CAN-SPAM Act, all e-mails sent from us will clearly state who the e-mail is from and provide clear information on how to contact the sender. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us. However, you will continue to receive essential transaction emails.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Cookies
				</Typography>
				<Typography variant="body1" gutterBottom>
					The Website uses "cookies" to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.We may use cookies to collect, store, and track information for statistical purposes to operate our Website and Services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. To learn more about cookies and how to manage them, visit internetcookies.org.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Do Not Track signals
				</Typography>
				<Typography variant="body1" gutterBottom>
					Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. Our Website does not track its visitors over time and across third party websites. However, some third-party sites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Links to other websites
				</Typography>
				<Typography variant="body1" gutterBottom>
					Our Website contains links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other websites or third-parties. We encourage you to be aware when you leave our Website and to read the privacy statements of each and every website that may collect Personal Information.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Information security
				</Typography>
				<Typography variant="body1" gutterBottom>
					We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and our Website cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third-party, despite best efforts.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Data breach
				</Typography>
				<Typography variant="body1" gutterBottom>
					In the event we become aware that the security of the Website has been compromised or users Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise required by law. When we do, we will post a notice on the Website and send you an email.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Legal disclosure
				</Typography>
				<Typography variant="body1" gutterBottom>
					We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena, or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. In the event we go through a business transition, such as a merger or acquisition by another company, or sale of all or a portion of its assets, you will be notified and only if you accept, your user account, and Personal Information will likely be among the assets transferred.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Changes and amendments
				</Typography>
				<Typography variant="body1" gutterBottom>
					We may update this Privacy Policy from time to time in our discretion and will notify you of any material changes to the way in which we treat Personal Information. When changes are made, we will send you an email to notify you. We may also provide notice to you in other ways in our discretion, such as through contact information you have provided. Any updated version of this Privacy Policy will be effective immediately upon the posting of the revised Privacy Policy unless otherwise specified. Your continued use of the Website or Services after the effective date of the revised Privacy Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Data in a manner materially different than what was stated at the time your Personal Data was collected.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Acceptance of this policy
				</Typography>
				<Typography variant="body1" gutterBottom>
					You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website and its Services.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Contacting us
				</Typography>
				<Typography variant="body1" gutterBottom>
					If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to support@vogro.ca.
				</Typography>

				<Typography variant="h4" style={{ paddingBottom: 10 }} gutterBottom>
					Terms of Use
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Terms and conditions
				</Typography>
				<Typography variant="body1" gutterBottom>
					These terms and conditions ("Terms", "Agreement") are an agreement between VoGro ("VoGro Community", "us", "we" or "our") and you ("User", "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the website and it’s application or services (collectively, "Website" or "Services").
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Accounts and membership
				</Typography>
				<Typography variant="body1" gutterBottom>
					You must be at least 16 years of age to use this Website. By using this Website and by agreeing to this Agreement you warrant and represent that you are at least 16 years of age. If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may monitor and review new accounts before you may sign in and use our Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Links to other websites
				</Typography>
				<Typography variant="body1" gutterBottom>
					Although this Website may link to other websites, we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked website, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their websites. We do not assume any responsibility or liability for the actions, products, services, and content of any other third-parties. You should carefully review the legal statements and other conditions of use of any website which you access through a link from this Website. Your linking to any other off-site websites is at your own risk.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Prohibited uses
				</Typography>
				<Typography variant="body1" gutterBottom>
					In addition to other terms as set forth in the Agreement, you are prohibited from using the Website or its Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Intellectual property rights
				</Typography>
				<Typography variant="body1" gutterBottom>
					This Agreement does not transfer to you any intellectual property owned by VoGro Community or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with VoGro Community. All trademarks, service marks, graphics and logos used in connection with our Website or Services are trademarks or registered trademarks of VoGro Community or VoGro Community licensors. Other trademarks, service marks, graphics and logos used in connection with our Website or Services may be the trademarks of other third parties. Your use of our Website and Services grants you no right or license to reproduce or otherwise use any VoGro or third-party trademarks.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Disclaimer of warranty
				</Typography>
				<Typography variant="body1" gutterBottom>
					You agree that your use of our Website or Services is solely at your own risk. You agree that such Service is provided on an "as is" and "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchant ability, fitness for a particular purpose and non-infringement. We make no warranty that the Services will meet your requirements, or that the Service will be uninterrupted, timely, secure, or error-free; nor do we make any warranty as to the results that may be obtained from the use of the Service or as to the accuracy or reliability of any information obtained through the Service or that defects in the Service will be corrected. You understand and agree that any material and/or data downloaded or otherwise obtained through the use of Service is done at your own discretion and risk and that you will be solely responsible for any damage to your computer system or loss of data that results from the download of such material and/or data. We make no warranty regarding any goods or services purchased or obtained through the Service or any transactions entered into through the Service. No advice or information, whether oral or written, obtained by you from us or through the Service shall create any warranty not expressly made herein.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Limitation of liability
				</Typography>
				<Typography variant="body1" gutterBottom>
					To the fullest extent permitted by applicable law, in no event will VoGro, its affiliates, product partners, directors, employees, agents, suppliers or licensors be liable to any person for: any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if VoGro Community has been advised as to the possibility of such damages or could have foreseen such damages. 
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Indemnification
				</Typography>
				<Typography variant="body1" gutterBottom>
					You agree to indemnify and hold VoGro Community and its affiliates, directors, officers, employees, and agents harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website or Services or any willful misconduct on your part.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Dispute resolution
				</Typography>
				<Typography variant="body1" gutterBottom>
					If you access the website/application, any dispute relating in any way to your visit to the website/application, to these Terms and Conditions, to our policies, to our advertising or solicitation practices or to products you purchase through the website shall be submitted to confidential arbitration in Toronto, Ontario, Canada, except that, to the extent you have in any manner violated or threatened to violate CRCS’ intellectual property rights, CRCS may seek injunctive or other appropriate relief in any court in Canada. Arbitration under this Agreement shall be conducted under the rules then prevailing of the Arbitrations Act, Ontario. The arbitrator's award shall be binding and may be entered as a judgment in any court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under this Agreement shall be joined to an arbitration involving any other party subject to this Agreement, whether through class arbitration proceedings or otherwise.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Changes and amendments
				</Typography>
				<Typography variant="body1" gutterBottom>
					We reserve the right to modify this Agreement or its policies relating to the Website or Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will send you an email to notify you. Continued use of the Website after any such changes shall constitute your consent to such changes.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Acceptance of these terms
				</Typography>
				<Typography variant="body1" gutterBottom>
					You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Website and its Services.
				</Typography>

				<Typography variant="body1" className={classes.bold} gutterBottom>
					Contacting us
				</Typography>
				<Typography variant="body1" gutterBottom>
					If you would like to contact us to understand more about this agreement or wish to contact us concerning any matter relating to it, you may send an email to support@vogro.ca.
				</Typography>
				<Typography variant="body1" gutterBottom>
					This document was last updated on May 17th, 2020
				</Typography>
			</Container>
		</div>
  );
}

export default Legal;
