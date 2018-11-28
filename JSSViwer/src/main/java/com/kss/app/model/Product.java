package com.kss.app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Product {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String product;
	
	private String month;
	
	private int year;
	
	private int lostIncidents;
	
	private int employeeHours;
	
	private int lostTimeInHours;
	
	private float customerOKMPPM;
	
	private float scrapToRevenueAsPercentage;
	
	private int numberOfCustomers;
	
	private float onTimeDeliveryAsPercentage;
	
	private float premiumFreightRevenueAsPercentage;
	
	private float overtimePercentageToRevenue;
	
	private Date dateAdded;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Plant plant;
	
	public Product(){}
	
	public Product(int id, String product, String month, int year, int lostIncidents, int employeeHours,
			int lostTimeInHours, float customerOKMPPM, float scrapToRevenueAsPercentage, int numberOfCustomers,
			float onTimeDeliveryAsPercentage, float premiumFreightRevenueAsPercentage,
			float overtimePercentageToRevenue, Date dateAdded) {
		super();
		this.id = id;
		this.product = product;
		this.month = month;
		this.year = year;
		this.lostIncidents = lostIncidents;
		this.employeeHours = employeeHours;
		this.lostTimeInHours = lostTimeInHours;
		this.customerOKMPPM = customerOKMPPM;
		this.scrapToRevenueAsPercentage = scrapToRevenueAsPercentage;
		this.numberOfCustomers = numberOfCustomers;
		this.onTimeDeliveryAsPercentage = onTimeDeliveryAsPercentage;
		this.premiumFreightRevenueAsPercentage = premiumFreightRevenueAsPercentage;
		this.overtimePercentageToRevenue = overtimePercentageToRevenue;
		this.dateAdded = dateAdded;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getLostIncidents() {
		return lostIncidents;
	}

	public void setLostIncidents(int lostIncidents) {
		this.lostIncidents = lostIncidents;
	}

	public int getEmployeeHours() {
		return employeeHours;
	}

	public void setEmployeeHours(int employeeHours) {
		this.employeeHours = employeeHours;
	}

	public int getLostTimeInHours() {
		return lostTimeInHours;
	}

	public void setLostTimeInHours(int lostTimeInHours) {
		this.lostTimeInHours = lostTimeInHours;
	}

	public float getCustomerOKMPPM() {
		return customerOKMPPM;
	}

	public void setCustomerOKMPPM(float customerOKMPPM) {
		this.customerOKMPPM = customerOKMPPM;
	}

	public float getScrapToRevenueAsPercentage() {
		return scrapToRevenueAsPercentage;
	}

	public void setScrapToRevenueAsPercentage(float scrapToRevenueAsPercentage) {
		this.scrapToRevenueAsPercentage = scrapToRevenueAsPercentage;
	}

	public int getNumberOfCustomers() {
		return numberOfCustomers;
	}

	public void setNumberOfCustomers(int numberOfCustomers) {
		this.numberOfCustomers = numberOfCustomers;
	}

	public float getOnTimeDeliveryAsPercentage() {
		return onTimeDeliveryAsPercentage;
	}

	public void setOnTimeDeliveryAsPercentage(float onTimeDeliveryAsPercentage) {
		this.onTimeDeliveryAsPercentage = onTimeDeliveryAsPercentage;
	}

	public float getPremiumFreightRevenueAsPercentage() {
		return premiumFreightRevenueAsPercentage;
	}

	public void setPremiumFreightRevenueAsPercentage(float premiumFreightRevenueAsPercentage) {
		this.premiumFreightRevenueAsPercentage = premiumFreightRevenueAsPercentage;
	}

	public float getOvertimePercentageToRevenue() {
		return overtimePercentageToRevenue;
	}

	public void setOvertimePercentageToRevenue(float overtimePercentageToRevenue) {
		this.overtimePercentageToRevenue = overtimePercentageToRevenue;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Plant getPlant() {
		return plant;
	}

	public void setPlant(Plant plant) {
		this.plant = plant;
	}
	
}
