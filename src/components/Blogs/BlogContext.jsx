import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthorProfile from './blogAuthor/AuthorProfile'
import InvoiceDiscountingBlog from './blogPages/InvoiceDiscountingBlog'
import WorkingCapitalBlog from './blogPages/WorkingCapitalBlog'
import BlockChainTechBlog from './blogPages/BlockChainTechBlog'
import DynamicDiscountingBlog from './blogPages/DynamicDiscountingBlog'
import SustainableSupplyChain from './blogPages/SustainableSupplyChainBlog'
import SmallAndMediumEntBlog from './blogPages/SmallAndMediumEntBlog'
import RoleofFintechBlog from './blogPages/RoleOfFintechBlog'
import OptimisedSupplyBlog from './blogPages/OptimisedSupplyBlog'
import FintechManageBlog from './blogPages/FintechManageBlog'
import MachineLearningBlog from './blogPages/MachineLearningBlog'
import FutureofSCFBlog from './blogPages/FutureOfSCFBlog'
import SupplyChainFinanceBlog from './blogPages/SupplyChainFinanceBlog'
import OptimiseUserExpBlog from './blogPages/OptimiseUserExpBlog'
import OnboardingBlog from './blogPages/OnboardingBlog'
import OptimisingCashFlow from './blogPages/OptimisingCashFlow'
import SMEsBlog from './blogPages/SMEsBlog'
import InventoryManagementBlog from './blogPages/InventoryManagementBlog'
import CreditRiskAssessmentBlog from './blogPages/CreditRiskAssessmentBlog'
import InvoiceFactoringBlog from './blogPages/InvoiceFactoringBlog'
import EarlyPaymentsBlog from './blogPages/EarlyPaymentsBlog'
import RoboAdvisorBlog from './blogPages/RoboAdvisorBlog'
import SecurityFraudBlog from './blogPages/SecurityFraudBlog'
import PartWorkingCapital from './blogPages/PartWorkingCapitalBlog'
import ExportCreditBlog from './blogPages/ExportCreditBlog'
import GreenFinancingBlog from './blogPages/GreenFinancingBlog'


const BlogContext = () => {
    return (
        <Switch>
            <Route path='/blogs/author/*' component={AuthorProfile} />

            <Route path='/blogs/supply-chain-finance-catalyst-business-growth' component={SupplyChainFinanceBlog} />
            <Route path="/blogs/future-supply-chain-finance" component={FutureofSCFBlog} />
            <Route path='/blogs/machine-learning-techniques-supply-chain-finance' component={MachineLearningBlog} />
            <Route path='/blogs/invoice-discounting-lifeline-cash-flow-management' component={InvoiceDiscountingBlog} />
            <Route path='/blogs/dynamic-discounting-game-changer-supply-chain-finance' component={DynamicDiscountingBlog} />
            <Route path='/blogs/sustainable-supply-chain-finance-green-financing-esg-integration' component={SustainableSupplyChain} />
            <Route path='/blogs/blockchain-technology-revolutionising-supply-chain-finance' component={BlockChainTechBlog} />
            <Route path='/blogs/role-fintech-democratizing-supply-chain-finance' component={RoleofFintechBlog} />
            <Route path='/blogs/hidden-marketing-power-optimised-supply-chain-finance' component={OptimisedSupplyBlog} />
            <Route path='/blogs/financial-technologies-fintech-manage-finances' component={FintechManageBlog} />
            <Route path='/blogs/optimising-working-capital-businesses-fresh-perspective' component={WorkingCapitalBlog} />
            <Route path='/blogs/optimise-user-experience-fintech-solutions' component={OptimiseUserExpBlog} />
            <Route path='/blogs/onboarding-process-for-suppliers' component={OnboardingBlog} />
            <Route path='/blogs/optimising-cash-flow' component={OptimisingCashFlow} />
            <Route path='/blogs/sme-face-cash-flow-challenges' component={SMEsBlog} />
            <Route path='/blogs/credit-risk-assessment' component={CreditRiskAssessmentBlog} />
            <Route path='/blogs/inventory-management' component={InventoryManagementBlog} />
            <Route path='/blogs/invoice-factoring' component={InvoiceFactoringBlog} />
            <Route path='/blogs/early-payments-discounts' component={EarlyPaymentsBlog} />
            <Route path='/blogs/robo-advisor-digital-investment' component={RoboAdvisorBlog} />
            <Route path='/blogs/security-fraud-prevention' component={SecurityFraudBlog} />
            <Route path='/blogs/part-of-optimising-working-capital-financial-planing' component={PartWorkingCapital} />
            <Route path='/blogs/export-credit' component={ExportCreditBlog} />
            <Route path='/blogs/green-financing' component={GreenFinancingBlog} />
            <Route path='/blogs/small-medium-enterprises' component={SmallAndMediumEntBlog} />

            
            

            {/* <Route path='/blogs/future-supply-chain-finance' component={InventoryManagementBlog} />
            <Route path='/blogs/future-supply-chain-finance' component={CreditRiskAssessmentBlog} />
            <Route path='/blogs/future-supply-chain-finance' component={SmallAndMediumEntBlog} />
 */}

        </Switch>
    )
}

export default BlogContext