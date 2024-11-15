import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-background text-sm ">
           
            <nav className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm">
                    <li>
                        <Link href="/" className="text-muted-foreground text-orange-500 hover:text-orange-600">
                            Home
                        </Link>
                    </li>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <li>
                        <Link href="/about-us" className="text-muted-foreground text-orange-500 hover:text-orange-600">
                            About Us
                        </Link>
                    </li>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <li>
                        <span className="text-foreground font-medium">Terms of Use</span>
                    </li>
                </ol>
            </nav>
            <article className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">Terms of Use</h1>

                <div className="prose prose-gray max-w-none dark:prose-invert">
                    <h2 className="text-2xl font-semibold mb-4">TERMS AND CONDITIONS OF SALE</h2>

                    <p className="mb-6">
                        THE TERMS AND CONDITIONS OF SALE (the <span className="font-semibold">"CONDITIONS"</span>) SET FORTH HEREIN
                        APPLY TO GOVERN THE SALE OF ALL OF THE SELLER'S PRODUCT(S) OR SERVICE(S) TO ANY THIRD PARTIES (THE{" "}
                        <span className="font-semibold">"BUYER"</span>).
                    </p>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">1. DEFINITIONS</h3>
                        <div className="space-y-4 ml-4">
                            <div>
                                <p>
                                    <span className="font-semibold">"Affiliate"</span> of a party shall mean an entity: (i) which is
                                    directly or indirectly controlling such party; or (ii) which is under the direct or indirect ownership
                                    or control as such party; or (iii) which is directly or indirectly owned or controlled by such party.
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-semibold">"Seller"</span> means the entity set out in invoice who supply any
                                    Products to the Buyer.
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-semibold">"Intellectual Property Rights"</span> means any and all intellectual
                                    and industrial property rights throughout the world, whether subsisting now or in the future,
                                    including rights of any kind in: (a) all inventions, and all patents, patent applications, together
                                    with all reissuances, continuations, continuations-in-part, divisions, revisions, extensions and
                                    re-examinations of any of the above, (b) all copyrightable works, whether registered or unregistered,
                                    (c) all trade secrets, know-how, (d) all trademarks service marks, logos, trade names, domain names
                                    consisting or incorporating any of the above, whether registered or unregistered, and all trade names
                                    and applications therefore, and (e) other proprietary rights relating to the foregoing.
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-semibold">"Products"</span> means all goods, products or services supplied to
                                    Buyer by Seller.
                                </p>

                            </div>
                        </div>
                        <p className="mt-2">
                            2. <strong>SALE BY BUYER</strong>
                        </p>
                        <p className="mt-2">
                            2.1

                            <span className="ml-5">
                                Seller shall sell, on a nonexclusive basis and the Buyer shall buy the Products subject to these Conditions, which supersede any other terms and exclude of any terms and conditions which the Buyer purports to apply or which are implied by trade, custom or course of dealing. No terms or conditions endorsed upon, delivered with or contained in the Buyer’s order or other document will form any legally binding agreement or contract as a result of such document being delivered to Seller or referred to in any other document provided by the Buyer. Any variation to these Conditions is of no effect unless agreed in writing and signed by an authorized representative of Seller.
                            </span>
                        </p>
                        <p className="mt-3">
                            2.4
                            <span className="ml-5">
                                Any statement, representation or warranty concerning the Products shall only be valid if confirmed by Seller in writing. The Buyer acknowledges that it does not rely on, and waives any claim for breach of, any such unconfirmed statement, representation or warranty.

                                Except as expressly set forth in these Conditions, no other right or entitlement of any kind (whether monetary or otherwise) is granted to the Buyer. It is agreed that Seller is free to sell the Products in any territory, either directly or indirectly, in an unlimited manner including to any customer, other distributors, agents or to dealers for resale or for any other purpose and the Buyer hereby confirms such right and irrevocably and unconditionally waives any right and/or demand and/or claim of any kind whatsoever in connection with the foregoing.
                            </span>
                        </p>

                        <div className="mt-3">
                            3. <strong className="ml-2">PURCHASE ORDERS; SUPPLY.</strong>

                            <ul className="list-circle list-inside ml-5">
                                <li>
                                    Buyer shall submit written purchase orders to Seller and shall coordinate with Seller the timing of the submission of the purchase orders. By issuing such an order, the Buyer is making a binding offer to purchase the Products under such order. Notwithstanding anything to the contrary set forth herein, an order shall only be binding on Seller upon its acceptance in writing, provided however, that (i) Seller reserves the right to approve or reject any such order, at its sole discretion; (ii) Seller reserves the right to deliver accepted order by installments; and (iii) any delivery times notified to the Buyer by Seller are estimates only. Where Seller gives a date of intended delivery, this will be subject to the Products ordered being available and Seller being able to make the delivery on that date. It is further agreed that any delay in delivery exceeding the corresponding delivery times notified to the Buyer by Seller, shall not constitute a breach of Seller's undertakings and shall not entitle the Buyer to any remedy, monetary or otherwise.
                                </li>
                                <li>
                                    Unless otherwise agreed in writing by both parties Terms of delivery of orders shall be EXW. (Incoterms) at Seller’s facility. Title to the Products shall pass to Buyer once the Products have been fully paid for. The Buyer shall bear all costs and risk of loss of or damage to the Products from the point of delivery by Seller to Buyer.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            4. <strong className="ml-2">PRICES AND PAYMENT</strong>

                            <ul className="list-circle list-inside ml-5">
                                <li>
                                    Prices. In consideration for Products purchased by the Buyer, it shall pay Seller the prices set forth in the relevant price list provided by Seller (the “Prices”). Seller shall have the right to update the Prices at any time at its sole discretion.
                                </li>
                                <li >
                                    Payment Terms. Buyer shall pay to Seller the purchase price for Products supplied to the Buyer in such currency agreed by the parties, by electronic funds transferred to Seller’s designated bank account as notified to Buyer by Seller in writing. Payment of the price for Products is due on the payment date specified on the invoice and to the terms agreed with Seller. Seller will invoice the Buyer for the Products on dispatch from Seller’s premises. Time of payment is of the essence. For the purposes of these Conditions, payment is received when Seller receives it in cleared funds. Payment by the Buyer shall be made without any deduction or set off.
                                </li>
                                <li>
                                    Taxes. The Prices are exclusive of all taxes, customs, levies, tariffs, duties or other charges, domestic or foreign imposed by any federal, state, or local tax authority including but not limited to import and export duties, customs fees, sales taxes and value added taxes, and any such taxes, where applicable, shall be paid by Buyer (except for taxes imposed on Seller's net income). Such taxes, if paid by Seller as applicable, shall be fully reimbursed by the Buyer.
                                </li>
                                <li>
                                    Delay of Payment. Buyer shall pay annual interest to Seller at the rate as are then in effect (as reported in The Wall Street Journal on the due date) plus five (5%) percent in respect of all payments which are overdue, without prejudice to other rights or remedies, including damages that Seller may be entitled to claim. In the event Seller is required to bring legal action to collect delinquent accounts, the Buyer agrees to pay to Seller reasonable attorney's fees and cost of suit and collection.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            5. <strong className="ml-2">BUYER’S DUTIES AND RESTRICTIONS</strong>

                            <ul className="list-circle list-inside ml-5">
                                <li>
                                    Marketing. Buyer shall not be entitled to conduct any marketing activities and/or otherwise use Seller's name with respect to the Products or otherwise unless such activities are approved in advance and in writing by Seller at its sole discretion. Seller shall have the right to conduct campaigns in any territory or in any part thereof to promote its brand, Trademarks and Products.
                                </li>
                                <li >
                                    Restrictions and Buyer's undertakings. Buyer shall (i) import and purchase the Products solely from Seller and distribute and sell the Products only as instructed by Seller; (ii) not, directly or indirectly promote, market, distribute and/or sell the Products in any territory not approved in writing by Seller; (iii) not sell the Products under any name other than as agreed by Seller in writing; (v) not make any representations, nor provide any warranties, vis-à-vis Seller and/or the Products and/or any other business or products of Seller that exceed or are inconsistent with the materials and instructions provided by Seller to Buyer by Seller; (vi) not make any representations that are likely to: (A) be detrimental to Seller’s name, Products, goodwill, or reputation; or (B) mislead or deceive a third party with regard to Seller’s name, Products, goodwill, or reputation; (vii) not use nor permit others to use any third party's confidential and/or proprietary information; (viii) comply with any applicable laws and regulations with respect to the of the Products, including, inter alia, health and safety laws and regulations; (xii) provide all required information and warnings with respect to the Products and their fabrication to Buyer's employees, consultants and contractors and to customers who are fabricators or that can otherwise be exposed to silica dust as a result of the fabrication of the Products; (xiii) instruct its employees, consultants, contractors and fabricators-customers to follow Seller’s fabrication and installation instructions, technical manuals and health and safety guidance which will be provided and/or published by Seller from time to time.

                                </li>
                                <li>
                                    Such restrictions shall apply to the Buyer and/or any others on its behalf;
                                </li>
                                <li>
                                    Environmental, Health and Safety Requirements. BUYER ACKNOWLEDGES THAT any FABRICATION, CUTTING, GRINDING, POLISHING, SHAPING, OR PROCESSING ETC. (“FABRICATION SERVICES”), OF SELLER QUARTZ SURFACES MAY INVOLVE BEING PRESENT IN AN ENVIRONMENT THAT MAY CONTAIN HAZARDOUS DUST (INCLUDING CRYSTALLINE SILICA DUST), STYRENE, ACETONE AND NOISE WHICH MAY CAUSE SERIOUS DISEASES AND/OR OTHER HEALTH DAMAGE, SOME OF WHICH CAN BE FATAL (SUCH AS SILICOSIS AND MAY AFFECT THE CENTRAL NERVOUS SYSTEM AND IS SUSPECTED OF CARCINOGENESIS), AND WHICH REQUIRE COMPLIANCE WITH APPLICABLE REGULATIONS OF THE OCCUPATIONAL SAFETY AND HEALTH ADMINISTRATION (“OSHA”). Without derogating from the aforesaid, Buyer warrants that it is well aware of the risks involved in cutting, sanding, shaping or otherwise fabricating and installing the Products. Such risks include but are not limited to risks related to the high content of crystalline silica (SiO2) in the Products. Buyer undertake to (i) comply with any relevant applicable laws and regulations, recommendation and best practices, as will be updated by local agencies and industry bodies from time to time (“EHS Standards”); (ii) ensure anyone on Buyer’s behalf (including its employees) will comply all EHS Standards, (iii) inform any entity or person to which it sells the Products (be it stone fabricators, contractors and customers) refer them to Seller’s SDS which can also be downloaded from the Seller web site at http://www.global.Seller.com/about-us/environmental-commitment/ and instruct them to comply with said EHS Standards (iv) effectively distribute all information and warnings provided by Seller to employees, contractors and to customers or to any other person who may otherwise be exposed to silica dust; and  (iii) inform Seller of any local legal requirement that applies on Seller with respect to the labelling and selling of the Products in the Territory. Everyone who distributes Seller products to fabricators must inform them of the importance of their responsibility to provide a safe working environment for all their employees and contractors, will comply with all relevant laws and regulations. Information about health and safety practices, laws and regulations can be found, among others, at:
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            <a className=" text-orange-500" href="#">http://www.Seller.com/en/About-Us/Pages/Professional-Guidelines-for-Fabricators.aspx; https://www.osha.gov/dts/hazardalerts/hydraulic_frac_hazard_alert.html;</a>
                            <a className=" text-orange-500 mt-3" href="#">http://www.ilo.org/safework/info;</a>
                            <a className=" text-orange-500 mt-3" href="#">http://www.nepsi.eu/good-practice-guide; http://www.cdc.gov/niosh/docs/96-112/ .</a>
                        </div>
                        <div className="mt-3">
                            <ul className="list-circle list-inside ml-5">
                                <li>
                                    Compliance, Consents and Approvals. Buyer shall at all time comply with any and all federal, state laws, regulations, directives, orders, rules and standards applicable to Buyer operation and/or to the performance under this Agreement (including without limiting all laws relating to: labor, privacy, data protection, health and safety, environment, anti-corruption, anti-slavery, custom and trade laws etc.) Buyer shall obtain, at its expense, and maintain the validity of any and all consents, permits, licenses and approvals required in connection with the Buyer's activities hereunder, including with respect to importing, storage, promotion, distribution, marketing and sale of the Products.
                                </li>
                                <li>

                                    Consents and Approvals. Buyer shall obtain, at its expense, and maintain the validity of any and all consents, permits, licenses and approvals required in connection with the Buyer's activities hereunder, including with respect to import, store, promote, distribute and sell the Products in the Territory.
                                </li>
                                <li>
                                    Buyer's Advice. Buyer shall advise Seller on any legal requirement applicable to and/or related to the distribution, marketing, sale and/or import of the Products in the Territory. Buyer shall also advise to Seller on market trends and other relevant data.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            <p>
                                6. <strong>TRADEMARKS AND Intellectual Property.</strong>
                            </p>
                            <ul className="list-circle list-inside ml-5 mt-3">
                                <li>
                                    IP Ownership. Seller owns and shall retain all Intellectual Property Rights, in and to the Products, including any new Products, modifications, improvements or derivative work thereto made available to the Buyer and/or by the Buyer and no title to or ownership of such shall be transferred to Buyer.
                                </li>
                            </ul>
                            <p className="mt-3">
                                The Buyer shall not, in any way, contest, dispute or impair the validity of or title to any of the Intellectual Property Rights owned by Seller.  The Buyer shall not nor permit others to copy, modify, alter, reverse engineer and/or make derivative works of with respect to any of Seller's products, all of which are expressly and strictly prohibited.
                            </p>

                            <ul className="list-circle list-inside ml-5 mt-3">
                                <li>

                                    Unless otherwise agreed in writing all Products will be sold and marketed under Seller’s name and trademarks and shall be used solely in accordance with Seller’s instruction and in connection with identifying the Products and related documentation, and only to the extent reasonably necessary for the sale of the Products.
                                </li>
                                <li>
                                    No Registration. Buyer shall not, directly or indirectly, in any country or governing body, apply to register in its own name, or otherwise attempt to acquire any legal interests in or right in or to, any of Seller's Intellectual Property Rights.
                                </li>
                                <li>
                                    Discontinue of Use. If Seller determines at its sole discretion that it is advisable to modify or discontinue use of the Trademarks and/or derivative trademarks, and/or use of one or more additional or substitute trade or service marks, Buyer shall comply with Seller’s directions to modify or otherwise discontinue use of such Trademarks and/or derivative trademarks within such reasonable time and pursuant to directions that Seller specifies to the Buyer.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            7.  <strong>TERMINATION</strong>
                            <ul className="list-circle list-inside  mt-3">
                                <li>
                                    Termination. Seller shall be entitled to cease the supply of Products to the Buyer (i) at any time by giving the Buyer ninety (90) days prior written notice. Upon such termination Seller shall not be required to and Buyer shall not be entitled to any payment of any kind and Caesarsstone shall not bear any liability or expenses of any kind related to the Buyer's operation related directly or indirectly to the distribution of the Products or to its termination; or (ii) immediately if the Buyer is in breach of any material obligation under these Conditions. Seller shall not be liable in any way for any claim, damage, expense or cost suffered by Buyer as a result of any such termination. The Buyer hereby irrevocably and and unconditionally waives any right and/or demand and/or claim of any kind whatsoever in connection with the foregoing.
                                </li>
                                <li>
                                    Effects of Termination. In the event of the cessation of the supply of Products by Seller to Buyer, the following shall occur:
                                </li>
                            </ul>
                            <ul className=" list-square ml-5 mt-4">
                                <li>
                                    All rights granted to Buyer under these Conditions shall forthwith terminate, expire and immediately revert to Seller, and Buyer shall immediately (i) cease the sale of the Products, and/or any other use of any kind thereof; (ii) return all property of Seller to it, at the cost of the Buyer; (iii) cease and desist from any use or reference to the Trademarks and any Derivative Trademarks; (iv) return any and all Confidential Information to Seller; and (v) perform any other reasonable requirement of Seller.
                                </li>
                                <li>
                                    Any terms included in this document that by their nature or otherwise reasonably should survive any termination or expiration of the Term shall be deemed to survive including, without limitation, Sections ‎4, ‎2, ‎6.4, ‎7, ‎8, ‎9.1 - ‎9.4, ‎10 and ‎11, all to the maximum extent permitted under applicable law.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            8.  <strong>CONFIDENTIALITY.</strong>
                            <ul className="list-circle list-inside  mt-3">
                                <li>
                                    Confidentiality. It may be necessary, from time to time, for Seller to disclose to Buyer certain non-public information relating to the Products including other documents prepared or provided by Seller (the “Confidential Information”). The Buyer will not disclose, disseminate, copy, match or reverse engineer any Confidential Information without the Seller's prior written consent. Any Confidential Information disclosed by Seller shall be used by Buyer exclusively for the purpose of selling the Products and for no other purpose.
                                </li>
                                <li>
                                    1 Data Protection. Seller may from time to time enter into invoicing financing arrangements with third parties in relation to the debt presented by the sale of any Products to the Buyer. Accordingly, any information held by Seller relating to the Buyer may be passed to any such third parties for debt collection purposes, including applying such information to credit reference agencies and making the relevant searches with them. The Buyer hereby consents to the use of such information for this purpose.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            9. <strong>WARRANTY, LIABILITY, INSURANCE.</strong>
                            <ul className="list-circle list-inside  mt-3">
                                <li>
                                    Seller will be responsible only for proven manufacturing defects in the Products, and only provided that (i) all fabrication, installation, processing maintenance or any other action related to the use of the Products were done according to Seller's product’s warranty, instructions and manuals within the territory in which the Products were bought; and (ii) the defective Products have been returned to Seller within a period of three (3) years following the acceptance of the Products by Buyer, provided however, that for the purpose of making any claim, the Buyer must immediately upon becoming aware of circumstances giving rise to a claim under this Section, notify Seller in writing setting out full particulars of the claim. The liability of Seller as defined in this Section ‎1 will be limited to (i) the damages that originate from a hidden flaw; and (ii) the replacement of the defective Products or the supply of equivalent Products, or to the repair of such Products or to the payment of the cost of replacing the Products or the acquiring of equivalent Products. Seller will not be liable for labour costs to remove and/or re-install any Products and/or transportation costs and/or loss of profit by the Buyer or any other party in respect of any warranty claim. For the avoidance of doubt, the limited warranty provided by Seller expressly excludes any liability for any damage caused to a slab of the Products by a stonemason or by means of any other fabrication or work performed on the slab.
                                </li>
                                <li>
                                    To the fullest extent permitted by law, THE FOREGOING IS IN LIEU OF ANY AND ALL OTHER WARRANTIES, GUARANTEES, PROMISES, OR REPRESENTATIONS, EXPRESS OR IMPLIED, INCLUDING SPECIFICALLY, BUT WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. For the avoidance of doubt, the foregoing warranty is provided solely to the Buyer, it does not apply to any other third parties, including without limitation, any customers of Buyer. Seller makes no representation, warranty or undertaking about the compliance of the Products with any statutory requirements relating to the marketing of Products. Buyer acknowledges that it is responsible for compliance of the Products with such legislation.
                                </li>
                                <li>
                                    To the fullest extent permitted by law, SELLER WILL NOT BE LIABLE TOWARDS THE BUYER UNDER ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT OR CONTRACT) FOR ANY INCIDENTAL, CONSEQUENTIAL, INDIRECT OR PUNITIVE OR EXEMPLARY DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOST DATA OR LOST PROFITS, EVEN IF SELLER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                </li>
                                <li>
                                    To the fullest extent permitted by law, SELLER’S LIABILITY UNDER OR FOR BREACH OF THIS AGREEMENT, SHALL BE LIMITED TO THE AGGREGATE AMOUNT ACTUALLY RECEIVED BY SELLER FROM THE BUYER, DURING THE PERIOD OF THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
                                </li>
                                <li>
                                    Insurance. In case Buyer is a commercial entity the Buyer shall be obligated to acquire with a reputable insurance company, at its own cost, throughout the term of these Conditions, product liability insurance insuring the Buyer’s and Seller's legal liability, including but not limited in respect of manufacturing, sale, fabrications, installation, packaging, handling and storage of the Products in amounts sufficient to cover all such liabilities per occurrence. Seller shall be included in such insurance policy as a beneficiary.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            10. <strong>INDEMNIFICATION.</strong>
                            <p className="mt-3">
                                Buyer shall defend, indemnify and hold Seller and its Affiliates, directors, officers and employees, and each of them (the “<strong><i>Indemnified Parties</i></strong>”), harmless from and against any liability, cost, loss, or expense of any kind (including reasonable attorneys’ fees) arising from any action brought against the Indemnified Parties in connection with Buyer’s activities under these Conditions, or with its failure to comply with the provisions set forth herein.
                            </p>
                        </div>
                        <div className="mt-3">
                            11. <strong>MISCELLANEOUS.</strong>
                            <ul className="list-circle list-inside  mt-3">
                                <li>
                                    Further assurance. The Buyer shall perform and do all such further acts and execute and deliver all such further documents, deeds and instruments as may reasonably be reasonably required by it to carry out and give effect to the provisions and intentions of these Conditions.
                                </li>
                                <li>
                                    Governing Law and Jurisdiction. These Conditions shall be governed by the law of the domicile of Seller in all other respects. Any dispute, controversy or claim arising out of or relating to the Products or these Conditions including any breach, termination or validity thereof or these Conditions shall be finally settled by the court closest to the domicile of the Seller entity that supplied the Products.
                                </li>
                                <li>
                                    Force Majeure. Seller shall not be liable for failure or delay in performing its obligations hereunder arising from any cause beyond its control including, but not limited to, acts of God, acts of civil or military authority, fires, strikes, lockouts or labor disputes, epidemics, governmental restrictions, war, riots or other civil disturbances, earthquakes, storms, typhoons and floods. In the event of any such failure or delay, Seller shall notify the Buyer in writing within thirty (30) of the occurrence of the Force Majeure event and the time for the performance of the parties’ obligations shall be extended for a period no less than that lost by reason of the delay.
                                </li>
                                <li>
                                    Assignment and Transfer. The Buyer shall not be entitled to assign or transfer all or any of its rights, benefits and obligations under these Conditions without the prior written consent of Seller. Seller may assign these Conditions and its respective rights and obligations hereunder.
                                </li>
                                <li>
                                    Relationship of the Parties. Each of the parties shall at all times during the term of these Conditions be considered, act as, and shall represent itself to be, an independent contractor, and not an agent or employee of the other. No employment relationship shall exist or be construed to exist between each of the parties and the employees of the other party. Neither party shall be authorized to bind, commit or assume any obligations on behalf of the other party, without the other party’s prior written consent.
                                </li>
                                <li>
                                    Entire Agreement. These Conditionsand Exhibits hereto are intended as the complete, final and exclusive statement of the terms of the agreement between the parties regarding the subject matter hereof and supersede any and all other prior or contemporaneous agreements or understandings, whether written or oral, between them relating to the subject matter hereof. These Conditionsmay be modified by Seller upon thirty (30) days prior written notice to the Buyer. The terms and conditions of these Conditionsshall prevail notwithstanding any conflict with the terms and conditions of any purchase order, acknowledgment or other instrument submitted by either of the parties, unless such instrument expressly stipulates a change of these Conditions and is executed by both parties.
                                </li>
                                <li>
                                    Notices. Any notice given by one party to the other shall be deemed properly given if specifically acknowledged by the receiving party in writing or when delivered to the recipient by hand, fax or special courier during normal business hours to such address as notified in writing from time to time by either party. Any notice sent in accordance with this Section shall be effective (i) if mailed, four (4) business days after mailing, (ii) if sent via facsimile, upon transmission and electronic confirmation of receipt or if transmitted and received on a non-business day on the first business day following transmission and electronic confirmation of receipt, (iii) if delivered by hand, upon delivery. Each communication and document made or delivered by one party to another pursuant to these Conditionsshall be in the English language.
                                </li>
                                <li>
                                    Waivers. A waiver of any default hereunder or of any of the terms and conditions of these Conditionsshall not be deemed to be a continuing waiver or a waiver of any other default or of any other term or condition but shall apply solely to the instance to which such waiver is directed. The exercise of any right or remedy provided to Seller in these Conditions shall be without prejudice to the right of Seller to exercise any other right or remedy provided by law or equity, except as expressly limited by these Conditions.
                                </li>
                                <li>
                                    Severability. If any term or provision of these Conditions will be found to be invalid, illegal or unenforceable, such term provision shall be deemed modified to the extent necessary to make the same valid and operative, or if it cannot be so modified, then eliminated, and the validity, legality, or enforceability of the remaining terms and provisions will not in any way be affected or impaired thereby.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}