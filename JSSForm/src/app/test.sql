-- page 2
SELECT * FROM Plant;

-- page 4 to save to DB
SELECT Region, Plant_Name FROM Plant;
SELECT LOST_TIME_INCIDENT, TOT_LOST_TIME_DAYS_MON, TOT_EMP_FIRST_DAY_MON, TOT_EMP_LAST_DAY_MON, Updated_Date FROM PLANT_KPI;
select Emp_Left_Mon, Tot_Emp_Last_Day_Mon, Tot_Lost_Time_Days_Mon, Tot_Supp_PPM_Qlty, Cost_Premium_Freight_In_Mon, Cost_Premium_Freight_Out_Mon, Revenue_Mon, Cogs, Mon_End_Inv_Local_Curr, Pre_Mon_End_Inv_Local_Curr, All_Mfg_Cost_PnL, Overtime_Cost_PnL, Created_Date, Updated_Date from Product_KPI;
select CUST_NAME from Customer;
select PROD_TYPE, SUB_PROD from PRODUCT;
select Cnf_Prod_Shipped_Mon, Tot_Prod_Shipped_Mon, Revenue_Mon, Tot_Rjctd_Qty_For_Mon, Revenue_Mon, Tot_Rjctd_Qty_For_Mon, Shipped_Qty_For_Mon, Scrap_For_Mon, No_Of_Complaints, Created_Date, Updated_Date from Customer_KPI;